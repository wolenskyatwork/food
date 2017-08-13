import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodColumn from './food-column';
import Foods from './foods';
import TimeInput from './time-input';

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

  handleSubmit = (finishTime) => {
    const numberTime = parseInt(finishTime);

    this.setState({
      three: [numberTime + 2, numberTime + 4],
      four: [numberTime + 2 + 3, numberTime + 4 + 5],
      five: [numberTime + 2 + 3 + 3, numberTime + 4 + 5 + 5],
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
        <div>
          Meal times
          <div>Meal one: {one}</div>
          <div>Meal two: {two}</div>
          <div>Meal three: {`${three[0]} - ${three[1]}`}</div>
          <div>Meal four: {`${four[0]} - ${four[1]}`}</div>
          <div>Meal five: {`${five[0]} - ${five[1]}`}</div>
          <div>Meal six: {six}</div>
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
