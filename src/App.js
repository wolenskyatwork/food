// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dietDaysActions from './actions/dietDaysActions'
import React, { Component } from 'react'
import moment from 'moment'
import chicken from './images/chicken.svg'
import biker from './images/biker.svg'
import muaythai from './images/muaythai.svg'
import './App.css'
import FoodColumn from './food-column'
import Foods from './foods'

import { LinkedList } from './classes/linked_list'
import { UPDATES } from './classes/node'

// import { baseTrainingPlans } from './cuts/base/index'
import { firstCutTrainingPlans } from './cuts/first_cut/index'

import TimeInput from './time-input'
import NewMeal from './new_meal'

import Meal from './redo/meal'
import P90xBlock from './redo/block'
import BlockContainer from './redo/block-container'
import { baseTrainingPlans } from "./cuts/base"

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

    // I can take this and make it somewhere else
    // this.baseTrainingPlans = baseTrainingPlans(this.handleNewMealTime)
    // this.firstCutTrainingPlans = firstCutTrainingPlans(this.handleNewMealTime)

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

  componentWillMount() {
    console.log(this.props)
    this.props.dietDaysActions.fetchDietDays()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dietDays && nextProps.dietDays.length) {
        // shouldn't trigger state update from prop update
      console.log(nextProps.dietDays, 'nextProps')
      const today = moment.now()
      // if (today.isSame())

      const dietDayIndex = nextProps.dietDays.findIndex((dietDay) => {
        if (dietDay.date.isSame(today, 'day')) {
          return true;
        }
        return false;
      })

      console.log(dietDayIndex, 'calculated diet day index')

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
    }, () => {
      // this.props.dietDaysActions.postDietDays(this.getDailyTrainingPlan().getTitle())
      // this.props.dietDaysActions.fetchDietDays() // bad race conditions :/
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

  renderCompletedDays = () => {
    const { dietDays } = this.props
    console.log(this.props)
    if (!dietDays || dietDays.length <= 0) return null

    const dayBlock = (idx, completion, choice, weight) => {
      return <div key={idx} className={'dayBlock'}>
        <div>Weight: {weight}</div>
        <div>Completion: {completion}</div>
        <div>Choice: {choice}</div>
      </div>
    }

    // not sure why sometimes this is nested and sometimes not. bad bug fix me
    return dietDays.map && dietDays.map((dietDay, i) => dayBlock(i, dietDay.completion, dietDay.choice, dietDay.weight))
  }

  renderDietDayDaInfo() {
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
            <Meal node={dailyTrainingPlan.head} putFunction={this.props.dietDaysActions.updateDietDays} />
            <Meal node={dailyTrainingPlan.head.next} putFunction={this.props.dietDaysActions.updateDietDays} />
            <NewMeal node={dailyTrainingPlan.head.next.next} putFunction={this.props.dietDaysActions.updateDietDays}/>
            <NewMeal node={dailyTrainingPlan.head.next.next.next} putFunction={this.props.dietDaysActions.updateDietDays} />
            <NewMeal node={dailyTrainingPlan.head.next.next.next.next} putFunction={this.props.dietDaysActions.updateDietDays} />
            <NewMeal node={dailyTrainingPlan.head.next.next.next.next.next} putFunction={this.props.dietDaysActions.updateDietDays} />
          </div>
        </div>

        <div>Approximate Weekly Totals</div>
        <div>Protein: {this.getDailyTrainingPlan().getWeekTotals().protein} ounces uncooked / {this.getDailyTrainingPlan().getWeekTotals().protein / 16} pounds </div>
        <div>Carbs: {this.getDailyTrainingPlan().getWeekTotals().carbs} grams</div>
        <div>Veggies: {this.getDailyTrainingPlan().getWeekTotals().vegetables} handfuls</div>

      </div>
    )
  }

  render() {
    const { dietDayIndex } = this.state

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

    // console.log(dietDayIndex, 'waaa')
    return (
      <div className="App">
        { /* <div className="App-header">
          <img src={muaythai} className="App-logo" alt="logo" />
          <img src={chicken} className="App-logo" alt="logo" />
          <img src={biker} className="App-logo" alt="logo" />
        </div> */ }


        <div className='meals-container'>

          <div className='padding'>

          </div>

          { (dietDayIndex !== 0 || !dietDayIndex) && form }
          { /*(dietDayIndex === 0 || dietDayIndex) && */ this.renderDietDayDaInfo() }

          <div className={'calendar'}>
            <div className={'row'}>
              {this.renderCompletedDays()}
            </div>
          </div>

          <BlockContainer />

          <div className='category flex-box'>
            <FoodColumn column='Vegetables' unit='small handfuls' choices={Foods.vegetables} />
            <FoodColumn column='Protein' unit='oz' choices={Foods.meats} />
            <FoodColumn column='Fats' unit='servings' choices={Foods.fats} />
            <FoodColumn column='Carbs' unit='grams' choices={Foods.carbs} />
            <FoodColumn column='Workout Carbs' unit='grams' choices={Foods.workoutCarbs} />
          </div>
          <div>
            <div>18 g of protein is 165.6 grams of egg whites</div>
            <div>3oz uncooked chicken about 2.1 oz cooked. (.69)</div>
            <div>Uncooked rice: 280g = 235.2 g of carbs
            Cooked rice: 910 g = 235.2 g of carbs

            Cooked rice: 0.25846 g of carbs per g of rice
            50 g of uncooked rice is 42 grams of carbs
            </div>
            <div>23.81 oz uncooked chicken, 16.51 oz cooked</div>
            <div>Uncooked quinoa: 192 g, cooked: 388g
              136g carbs in 388g quinoa
              0.35 g carbs per g quinoa
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dietDaysActions: bindActionCreators(dietDaysActions, dispatch),
  }
}

function mapStateToProps(state) {
  console.log(state.dietDays)
  return {
    dietDays: state.dietDays, // fix this
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
