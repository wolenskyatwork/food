// @flow

import React, { Component } from 'react'
import moment from 'moment'
import chicken from './images/chicken.svg'
import biker from './images/biker.svg'
import muaythai from './images/muaythai.svg'
import './App.css'
import FoodColumn from './food-column'
import Foods from './foods'
// import { baseChoices } from './cuts/base'
// import type { MealKeys } from './cuts/types'

import { getNewNonTraining } from './cuts/base/non_training.js'
import {getNewLightFirstThingTraining} from './cuts/base/light/first_thing.js'
import { LinkedList } from './classes/linked_list'

import TimeInput from './time-input'
import NewMeal from './new_meal'

type State = {
  dailyTrainingPlan: LinkedList,
  waking: string,
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
    this.baseTrainingPlans = [
      getNewNonTraining(this.handleNewMealTime),
      getNewLightFirstThingTraining(this.handleNewMealTime),
    ]

    this.state = {
      dailyTrainingPlan: this.baseTrainingPlans[0],
      waking: '',
      first: null,
      second: null,
      third: null,
      fourth: null,
      fifth: null,
      sixth: null,
    }
  }

  getMomentFromString(numberTime: number, addTime: number) {
    return moment().hour(numberTime).minute(0).second(0).add(addTime, 'h')
  }

  /* eslint-disable no-undef */
  handleChooseDailyTrainingPlan = (event: any) => {
    this.setState({
      dailyTrainingPlan: this.baseTrainingPlans[event.target.value],
    })
  }

  handleWakingTimeSubmit = (input: any) => {
    this.state.dailyTrainingPlan.setMealTimeByName('first', moment({ hour: input, minute: 5 }))

    this.setState({
      waking: input,
    })
  }

  handleNewMealTime = (name: string, time: string) => {
    this.setState({
      [name]: time,
    })
  }

  render() {
    const { dailyTrainingPlan } = this.state
    console.log(dailyTrainingPlan)
    return (
      <div className="App">
        <div className="App-header">
          <img src={muaythai} className="App-logo" alt="logo" />
          <img src={chicken} className="App-logo" alt="logo" />
          <img src={biker} className="App-logo" alt="logo" />
        </div>
        <div className='side-padding'>
          <div className='padding'>
            <form>
              <label className='column-title'>
                {'What is your training plan for today?'}
              </label>
              <select className='column-title' value={this.state.dailyTrainingPlan} onChange={this.handleChooseDailyTrainingPlan}>
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
            <NewMeal node={dailyTrainingPlan.head} />
            <NewMeal node={dailyTrainingPlan.head.next} />
            <NewMeal node={dailyTrainingPlan.head.next.next} />
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
