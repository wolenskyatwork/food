import React, { Component } from 'react';
import TimeChooser from './time-chooser';
import CarbChooser from './carb-chooser';
import moment from 'moment';

class Meal extends Component {
  render() {
    const {
      number,
      amounts,
      hourRange,
      time,
      handleTimeChange,
    } = this.props;

    return (
      <div className='Meal flex-box column sixth'>
        <h3>{`meal#${number}`}</h3>
        <CarbChooser amount={amounts.carbs}/>
        {hourRange && time &&
          <div>
            <h4>{moment(time).format('h:mma')}</h4>

            <TimeChooser
              handleTimeChange={handleTimeChange}
              hourRange={hourRange}
              mealKey={number}
              time={time}
            />
          </div>
        }
        <div>
          <div>
            <div>{`Protein: ${amounts.protein} ounces`}</div>
          </div>

          <div>
            <div>{`Veggies: ${amounts.veggies} handfuls`}</div>
          </div>

          <div>
            <div>{`Fat: ${amounts.fat} serving`}</div>
          </div>

          <div>
            <div>{`Carbs: ${amounts.carbs} grams`}</div>
          </div>

          <div>
            <div>{`Workout carbs: ${amounts.workoutCarbs} grams`}</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Meal;
