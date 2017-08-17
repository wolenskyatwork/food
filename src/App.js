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
      three: null,
      four: null,
      five: null,
    };
  }

  getMomentFromString = (numberTime, addTime) => {
    return moment().hour(numberTime).minute(0).second(0).add(addTime, 'h').toString();
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
      three,
      four,
      five,
    } = this.state;
    console.log(this.state);

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
          />
          <Meal
            number='two'
            amounts={lightFirst.amounts.meal2}
          />
          <Meal
            number='three'
            amounts={lightFirst.amounts.meal3}
            time={three}
            hourRange={[2,4]}
            handleTimeChange={this.handleTimeChangeThree}
          />
          <Meal
            number='four'
            amounts={lightFirst.amounts.meal4}
            time={four}
            hourRange={[3,5]}
            handleTimeChange={this.handleTimeChangeFour}
          />
          <Meal
            number='five'
            amounts={lightFirst.amounts.meal5}
            hourRange={[3,5]}
            time={five}
            handleTimeChange={this.handleTimeChangeFive}
          />
          <Meal
            number='six'
            amounts={lightFirst.amounts.meal6}
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
