// @flow

import React, { Component } from 'react'
import moment from 'moment'
import chicken from './images/chicken.svg'
import biker from './images/biker.svg'
import muaythai from './images/muaythai.svg'
import './App.css'
import FoodColumn from './food-column'
import Foods, { afterChoices } from './foods'
// import TimeInput from './time-input'
// import Meal from './meal'

type State = {
  times: Array<any>,
  after: number,
  waking: ?Object,
}

class App extends Component<*, State> {
  constructor() {
    super()

    this.state = {
      times: [null, null, null, null, null, null],
      after: 0,
      waking: null,
    }
  }

  getMomentFromString = (numberTime, addTime) => moment().hour(numberTime).minute(0).second(0).add(addTime, 'h')

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={muaythai} className="App-logo" alt="logo" />
          <img src={chicken} className="App-logo" alt="logo" />
          <img src={biker} className="App-logo" alt="logo" />
        </div>
        <div className='side-padding'>
          <div className='padding'>
            <form onSubmit={this.handleSubmit}>
              <label className='column-title'>
                {'After how many meals will your workout be? '}
              </label>
              <select className='column-title' value={this.state.after} onChange={this.handleChooseAfter}>
                {
                  afterChoices.map((planChoice, i) => <option key={i} value={i}>{choiceTitles[i]}</option>)
                }
              </select>
            </form>
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
