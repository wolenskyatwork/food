// @flow

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

import { baseTrainingPlans } from './cuts/base/index'

import TimeInput from './time-input'
import NewMeal from './new_meal'

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
}

class App extends Component<*, State> {
  baseTrainingPlans: Array<LinkedList>

  constructor() {
    super()

    // I can take this and make it somewhere else
    this.baseTrainingPlans = baseTrainingPlans(this.handleNewMealTime)

    this.state = {
      dailyTrainingPlanIndex: 0,
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

  /* eslint-disable no-undef */
  handleChooseDailyTrainingPlan = (event: any) => {
    this.baseTrainingPlans = baseTrainingPlans(this.handleNewMealTime) // reset with no nodes
    this.setState({
      dailyTrainingPlanIndex: event.target.value,
    })
  }

  getDailyTrainingPlan = () => {
    return this.baseTrainingPlans[this.state.dailyTrainingPlanIndex]
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

  render() {
    const dailyTrainingPlan = this.getDailyTrainingPlan()

    return (
      <div className="App">
        <div className="App-header">
          <img src={muaythai} className="App-logo" alt="logo" />
          <img src={chicken} className="App-logo" alt="logo" />
          <img src={biker} className="App-logo" alt="logo" />
        </div>
        <div className='meals-container'>
          <div className='padding'>
            <form>
              <label>
                {'What is your training plan for today?'}
              </label>
              <select value={this.state.dailyTrainingPlanIndex} onChange={this.handleChooseDailyTrainingPlan}>
                {
                  this.baseTrainingPlans.map((linkedList, i) => <option key={i} value={i}>{linkedList.title}</option>)
                }
              </select>
            </form>
          </div>

          <div>
            <div>When will you wake up?</div>
            <TimeInput label={'waking time'} handleSubmit={this.handleWakingTimeSubmit} />
          </div>

            <div>
                <div>When will you work out?</div>
                <TimeInput label={'workout time'} handleSubmit={this.handleWorkoutTimeSubmit} />
            </div>

          <div className='meal-list'>
            <NewMeal node={dailyTrainingPlan.head} />
            <NewMeal node={dailyTrainingPlan.head.next} />
            <NewMeal node={dailyTrainingPlan.head.next.next}/>
            <NewMeal node={dailyTrainingPlan.head.next.next.next} />
            <NewMeal node={dailyTrainingPlan.head.next.next.next.next} />
            <NewMeal node={dailyTrainingPlan.head.next.next.next.next.next} />
          </div>

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

export default App
