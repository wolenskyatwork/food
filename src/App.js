import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import FoodColumn from './food-column';
import Foods, { lightFirst } from './foods';
import TimeInput from './time-input';
import Meal from './meal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      one: '2/3 on waking, 1/3 during workout',
      two: '20 minutes after workout',
      three: [2,4],
      four: [3,5],
      five: [3,5],
      six: 'bedtime',
    };
  }

  getMoment = (numberTime, addTime) => {
    return moment().hour(numberTime).minute(0).add(addTime, 'h').format('h:mma');
  }

  handleSubmit = (finishTime) => {
    const numberTime = parseInt(finishTime);

    this.setState({
      three: [
        this.getMoment(numberTime, 2),
        this.getMoment(numberTime, 4),
      ],
      four: [
        this.getMoment(numberTime, 5),
        this.getMoment(numberTime, 9),
      ],
      five: [
        this.getMoment(numberTime, 8),
        this.getMoment(numberTime, 14),
      ],
    });
  }

  render() {
    const {
      one,
      two,
      three,
      four,
      five,
      six,
    } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <div>
          <TimeInput label='Finishing workout' handleSubmit={this.handleSubmit} />
        </div>
        <div className='flex-box'>
          <Meal
            number='one'
            amounts={lightFirst.amounts.meal1}
            hourRange={one}
          />
          <Meal
            number='two'
            amounts={lightFirst.amounts.meal2}
            hourRange={two}
          />
          <Meal
            number='three'
            amounts={lightFirst.amounts.meal3}
            hourRange={three}
          />
          <Meal
            number='four'
            amounts={lightFirst.amounts.meal4}
            hourRange={four}
          />
          <Meal
            number='five'
            amounts={lightFirst.amounts.meal5}
            hourRange={five}
          />
          <Meal
            number='six'
            amounts={lightFirst.amounts.meal6}
            hourRange={six}
          />
        </div>

        <div className='category flex-box'>
          <FoodColumn choices={Foods.vegetables} />
          <FoodColumn choices={Foods.meats} />
          <FoodColumn choices={Foods.fats} />
          <FoodColumn choices={Foods.carbs} />
        </div>
      </div>
    );
  }
}

export default App;
