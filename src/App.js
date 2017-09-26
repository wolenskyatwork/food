import React, { Component } from 'react';
import moment from 'moment';
import chicken from './images/chicken.svg';
import biker from './images/biker.svg';
import muaythai from './images/muaythai.svg';
import './App.css';
import FoodColumn from './food-column';
import Foods, { baseAfterChoices, baseTotals } from './foods';
import TimeInput from './time-input';
import Meal from './meal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      times: [null, null, null, null, null, null],
      after: 0,
      waking: null,
    };
  }

  getMomentFromString = (numberTime, addTime) => {
    return moment().hour(numberTime).minute(0).second(0).add(addTime, 'h');
  }

  handleChooseAfter = (event) => {
    this.setState({
      after: Number(event.target.value),
    });
  }

  handleSubmitWorkout = (event) => {
    const times = this.state.times;
    times[this.state.after] = this.getMomentFromString(event, 0);

    times.map((time, index) => {
      const { after } = this.state;
      const plan = baseAfterChoices[after][index];
      if (plan.hours && times[plan.hours.number]) {
        return times[plan.hours.number].add(plan.hours.begin, 'hours');
      }
      return time;
    })

    this.setState({
      times,
    });
  }

  handleSubmitWaking = (event) => {
    this.setState({
      waking: moment().hour(event).minute(0).second(0),
    })
  }

  updateTime = (number, time) => {
    const times = this.state.times;

    times[number] = time;

    this.setState({
      times,
    });
  }

  render() {
    const {
      times,
      after,
      waking,
    } = this.state;

    const plan = baseAfterChoices[after];
    return (
      <div className="App">
        <div className="App-header">
          <img src={muaythai} className="App-logo" alt="logo" />
          <img src={chicken} className="App-logo" alt="logo" />
          <img src={biker} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              After how many meals will your workout be?
              <select value={this.state.after} onChange={this.handleChooseAfter}>
                {
                  baseAfterChoices.map((plan, i) => {
                    return <option key={i} value={i}>{i}</option>
                  })
                }
              </select>
            </label>
          </form>
        </div>
        { /*
        <div>
          <TimeInput label='Wake up' handleSubmit={this.handleSubmitWaking} />
          <TimeInput label='Finishing workout' handleSubmit={this.handleSubmitWorkout} />
        </div>
        */ }
        <div className='flex-box'>
          <Meal
            time={waking}
            number={0}
            meal={plan[0]}
          />
          <Meal
            times={times}
            time={times[1]}
            number={1}
            meal={plan[1]}
            updateTime={this.updateTime}
          />
          <Meal
            times={times}
            time={times[2]}
            number={2}
            meal={plan[2]}
            updateTime={this.updateTime}
          />
          <Meal
            times={times}
            time={times[3]}
            number={3}
            meal={plan[3]}
            updateTime={this.updateTime}
          />
          <Meal
            times={times}
            time={times[4]}
            number={4}
            meal={plan[4]}
            updateTime={this.updateTime}
          />
          <Meal
            times={times}
            time={times[5]}
            number={5}
            meal={plan[5]}
            updateTime={this.updateTime}
          />
        </div>

        <div className='category flex-box'>
          <FoodColumn column='Vegetables' unit='small handfuls' choices={Foods.vegetables} total={baseTotals[after].veggies}/>
          <FoodColumn column='Protein' unit='grams' choices={Foods.meats} total={baseTotals[after].protein}/>
          <FoodColumn column='Fats' unit='servings' choices={Foods.fats} total={baseTotals[after].fat}/>
          <FoodColumn column='Carbs' unit='grams' choices={Foods.carbs} total={baseTotals[after].carbs}/>
          <FoodColumn column='Workout Carbs' unit='grams' choices={Foods.workoutCarbs} total={baseTotals[after].workoutCarbs}/>
        </div>
      </div>
    );
  }
}

export default App;
