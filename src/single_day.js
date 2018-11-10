// @flow

import React, { Component } from 'react'
import NewMeal from './new_meal'
import TimeInput from './time-input'
import {UPDATES} from "./classes/node"
import {firstCutTrainingPlans} from "./cuts/first_cut"

type Props = {
  choices: Array<string>,
  column: string,
}

type State = {
  dailyTrainingPlanIndex: number,
  waking: string,
  workout: string,
}

class SingleDay extends Component<Props, State> {

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

  handleWorkoutTimeSubmit = (input: any) => {
    const dailyTrainingPlan = this.getDailyTrainingPlan()

    dailyTrainingPlan.setWorkoutMealTime(this.mapInputToMoment(input))

    this.setState({
      workout: input,
    })
  }

  /* eslint-disable no-undef */
  handleChooseDailyTrainingPlan = (event: any) => {
    this.trainingPlans = firstCutTrainingPlans(this.handleNewMealTime) // reset with no nodes

    this.setState({
      waking: '',
      workout: '',
      dailyTrainingPlanIndex: event.target.value,
    }, () => {
      // this.props.dietDaysActions.postDietDays(this.getDailyTrainingPlan().getTitle())
      // this.props.dietDaysActions.fetchDietDays() // bad race conditions :/
    })
  }

  render() {
      const dailyTrainingPlan = this.getDailyTrainingPlan()

      return (
        <div>
          <form>
            <label>
              {'What is your training plan for today?'}
            </label>
            <select value={this.state.dailyTrainingPlanIndex} onChange={this.handleChooseDailyTrainingPlan}>
              {
                this.trainingPlans.map((linkedList, i) => <option key={i} value={i}>{linkedList.title}</option>)
              }
            </select>
          </form>
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
              <NewMeal node={dailyTrainingPlan.head} />
              <NewMeal node={dailyTrainingPlan.head.next} />
              <NewMeal node={dailyTrainingPlan.head.next.next} />
              <NewMeal node={dailyTrainingPlan.head.next.next.next} />
              <NewMeal node={dailyTrainingPlan.head.next.next.next.next} />
              <NewMeal node={dailyTrainingPlan.head.next.next.next.next.next} />
            </div>
          </div>
        </div>
      )
  }
}

export default SingleDay
