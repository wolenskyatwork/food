// @flow
import React, { Component } from 'react'
import moment from 'moment'
import './App.css'

import { LinkedList } from './classes/linked_list'
import { UPDATES } from './classes/node'

import { firstCutTrainingPlans } from './cuts/first_cut/index'

import TimeInput from './time-input'
import Meal from './redo/meal'
import BlockContainer from './redo/block-container'

type State = {
  dailyTrainingPlanIndex: number,
  waking: string,
  workout: string,
  first: ?string,
  second: ?string,
  third: ?string,
  fourth: ?string,
  fifth: ?string,
  sixth: ?string,
  dietDayIndex: ?number,
}

type Props = {
  dietDays: Array<*>,
  dietDaysActions: any,
}

class App extends Component<Props, State> {
  trainingPlans: Array<LinkedList>

  constructor() {
    super()

    this.trainingPlans = firstCutTrainingPlans(this.handleNewMealTime)

    this.state = {
      dietDayIndex: null,
      dailyTrainingPlanIndex: 1,
      waking: '',
      workout: '',
      first: null,
      second: null,
      third: null,
      fourth: null,
      fifth: null,
      sixth: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dietDays && nextProps.dietDays.length) {
      const today = moment.now()

      const dietDayIndex = nextProps.dietDays.findIndex((dietDay) => {
        if (dietDay.date.isSame(today, 'day')) {
          return true
        }
        return false
      })

      if (dietDayIndex !== -1) {
        this.setState({
          dietDayIndex,
        })
      }
    }
  }

  /* eslint-disable no-undef */
  handleChooseDailyTrainingPlan = (event: any) => {
    this.trainingPlans = firstCutTrainingPlans(this.handleNewMealTime) // reset with no nodes

    this.setState({
      dailyTrainingPlanIndex: event.target.value,
    })
  }

  getDailyTrainingPlan = () => {
    return this.trainingPlans[this.state.dailyTrainingPlanIndex]
  }

  handleWakingTimeSubmit = (input: any) => {
    const dailyTrainingPlan = this.getDailyTrainingPlan()
    const secondNode = dailyTrainingPlan.getNodeByName('second')
    if (secondNode.updates === UPDATES.BOTH || secondNode.updates === UPDATES.PREV) {
      // no need to update
    } else {
      dailyTrainingPlan.setMealTimeByName('first', this.mapInputToMoment(input))
    }

    this.setState({
      waking: input,
    })
  }

  mapInputToMoment = (input: any): Moment => {
    return moment(input, 'hh:mm a')
  }

  handleWorkoutTimeSubmit = (input: any) => {
    const dailyTrainingPlan = this.getDailyTrainingPlan()

    dailyTrainingPlan.setWorkoutMealTime(this.mapInputToMoment(input))

    this.setState({
      workout: input,
    })
  }

  handleNewMealTime = (name: string, time: string) => {
    this.setState({
      [name]: time,
    })
  }

  renderDietDayInfo() {
    const dailyTrainingPlan = this.getDailyTrainingPlan()

    return (
      <div>
          <div>
            <div>When will you wake up?</div>
            <TimeInput label={'waking time'} handleSubmit={this.handleWakingTimeSubmit} />
          </div>

          <div>
          <div>When will you work out?</div>
        <TimeInput label={'workout time'} handleSubmit={this.handleWorkoutTimeSubmit} />
        </div>

        <div>
          { this.state.waking }
          { this.state.workout }
        </div>
        <div className={'flex-box column'}>
          <div className='meal-list'>
            <Meal node={dailyTrainingPlan.head} />
            <Meal node={dailyTrainingPlan.head.next} />
            <Meal node={dailyTrainingPlan.head.next.next}/>
            <Meal node={dailyTrainingPlan.head.next.next.next} />
            <Meal node={dailyTrainingPlan.head.next.next.next.next} />
            <Meal node={dailyTrainingPlan.head.next.next.next.next.next} />
          </div>
        </div>

      </div>
    )
  }

  render() {
    const form = <form>
      <label>
        {'What is your training plan for today?'}
      </label>
      <select value={this.state.dailyTrainingPlanIndex} onChange={this.handleChooseDailyTrainingPlan}>
        {
          this.trainingPlans.map((linkedList, i) => <option key={i} value={i}>{linkedList.title}</option>)
        }
      </select>
    </form>

    return (
      <div className="App">

        <div className='meals-container'>

          <div className='padding'>

          </div>

          { form }
          { this.renderDietDayInfo() }

          <BlockContainer />

        </div>
      </div>
    )
  }
}


export default App
