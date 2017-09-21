import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import FoodColumn from './food-column';
import Foods, { afterChoices } from './foods';
import TimeInput from './time-input';
import Meal from './meal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      after: 0,
    };
  }

  getMomentFromString = (numberTime, addTime) => {
    return moment().hour(numberTime).minute(0).second(0).add(addTime, 'h').toString();
  }

  handleChooseAfter = (event) => {
    this.setState({
      after: event.target.value,
    });
  }

  handleSubmit = (finishTime) => {
    const numberTime = parseInt(finishTime);

    this.setState({
      three: this.getMomentFromString(numberTime, 2),
      four: this.getMomentFromString(numberTime, 5),
      five: this.getMomentFromString(numberTime, 8),
    });
  }

  handleTimeChangeThree = (value) => {
    const momentThree = moment(value);

    this.setState({
      three: momentThree.toString(),
      four: momentThree.add(3, 'h').toString(),
      five: momentThree.add(6, 'h').toString(),
    })
  }

  handleTimeChangeFour = (value) => {
    const momentFour = moment(value);

    this.setState({
      four: momentFour.toString(),
      five: momentFour.add(3, 'h').toString(),
    })
  }

  handleTimeChangeFive = (value) => {
    const momentFive = moment(value);

    this.setState({
      five: momentFive.toString(),
    })
  }

  render() {
    const {
      one,
      two,
      three,
      four,
      five,
      six,
      after,
    } = this.state;

    const plan = afterChoices[after];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              After how many meals will your workout be?
              <select value={this.state.after} onChange={this.handleChooseAfter}>
                {
                  afterChoices.map((plan, i) => {
                    return <option key={i} value={i}>{i}</option>
                  })
                }
              </select>
            </label>
          </form>
        </div>
        <div>
          <TimeInput label='Finishing workout' handleSubmit={this.handleSubmit} />
        </div>
        <div className='flex-box'>
          <Meal
            time={one}
            number='one'
            meal={plan.first}
          />
          <Meal
            time={two}
            number='two'
            meal={plan.second}
          />
          <Meal
            time={three}
            number='three'
            meal={plan.third}
            handleTimeChange={this.handleTimeChangeThree}
          />
          <Meal
            time={four}
            number='four'
            meal={plan.fourth}
            handleTimeChange={this.handleTimeChangeFour}
          />
          <Meal
            time={five}
            number='five'
            meal={plan.fifth}
            handleTimeChange={this.handleTimeChangeFive}
          />
          <Meal
            time={six}
            number='six'
            meal={plan.sixth}
          />
        </div>

        <div className='category flex-box'>
          <FoodColumn column='Vegetables' choices={Foods.vegetables} />
          <FoodColumn column='Meats' choices={Foods.meats} />
          <FoodColumn column='Fats' choices={Foods.fats} />
          <FoodColumn column='Carbs' choices={Foods.carbs} />
        </div>
      </div>
    );
  }
}

export default App;
