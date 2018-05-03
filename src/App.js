// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import moment from 'moment'
import chicken from './images/chicken.svg'
import biker from './images/biker.svg'
import muaythai from './images/muaythai.svg'
import './App.css'
// eslint-disable-next-line no-unused-vars
import FoodColumn from './food-column'
import Foods, { afterChoices } from './foods'
// eslint-disable-next-line no-unused-vars
import TimeInput from './time-input'
// eslint-disable-next-line no-unused-vars
import Meal from './meal'

class App extends Component {
  constructor() {
    super()

    this.state = {
      times: [null, null, null, null, null, null],
      after: 0,
      waking: null,
    }
  }

  getMomentFromString = (numberTime, addTime) => moment().hour(numberTime).minute(0).second(0).add(addTime, 'h')

  handleChooseAfter = (event) => {
    this.setState({
      after: Number(event.target.value),
    })
  }

  handleSubmitWorkout = (event) => {
    const times = this.state.times;
    times[this.state.after] = this.getMomentFromString(event, 0)

    times.map((time, index) => {
      const { after } = this.state
      const plan = afterChoices[after][index]
      if (plan.hours && times[plan.hours.number]) {
        return times[plan.hours.number].add(plan.hours.begin, 'hours')
      }
      return time
    })

    this.setState({
      times,
    })
  }

  handleSubmitWaking = (event) => {
    this.updateTime(0, moment().hour(event).minute(0).second(0))
  }

  updateTime = (number, time) => {
    const times = this.state.times

    times[number] = time

    this.setState({
      times,
    })
  }

  render() {
    const {
      times,
      after,
    } = this.state
    const choiceTitles = [
      // 'light day first thing training',
      // 'light day training after one meal',
      // 'light day training after two meals',
      // 'light day training after three meals',
      // 'light day training after four meals',
      'non training',
      'light day training upon waking',
      'moderate day training after one meal',
      'light day training after three meals',
    ]

    const plan = afterChoices[after]
    console.log(times)
    return (
      <div className="App">
        <div className="App-header">
          <img src={muaythai} className="App-logo" alt="logo" />
          <img src={chicken} className="App-logo" alt="logo" />
          <img src={biker} className="App-logo" alt="logo" />
          <h2></h2>
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
          {<div>
            <TimeInput label='Wake up' handleSubmit={this.handleSubmitWaking} />
            <TimeInput label='Finishing workout' handleSubmit={this.handleSubmitWorkout} />
          </div>}
          <div className='flex-box'>
            <Meal
              time={times[0]}
              number={0}
              plan={plan}
              times={times}
            />
            <Meal
              times={times}
              time={times[1]}
              number={1}
              plan={plan}
              updateTime={this.updateTime}
            />
            <Meal
              times={times}
              time={times[2]}
              number={2}
              plan={plan}
              updateTime={this.updateTime}
            />
            <Meal
              times={times}
              time={times[3]}
              number={3}
              plan={plan}
              updateTime={this.updateTime}
            />
            <Meal
              times={times}
              time={times[4]}
              number={4}
              plan={plan}
              updateTime={this.updateTime}
            />
            { plan[5] &&
              <Meal
                times={times}
                time={times[5]}
                number={5}
                plan={plan}
                updateTime={this.updateTime}
              />
            }
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
