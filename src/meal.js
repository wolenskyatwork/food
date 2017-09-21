import React, { Component } from 'react';
import TimeChooser from './time-chooser';
import CarbChooser from './carb-chooser';
import moment from 'moment';

class Meal extends Component {
  render() {
    const {
      number,
      meal: {
        subtitle,
        amounts,
        hourRange,
        time,
      },
      handleTimeChange,
    } = this.props;

    return (
      <div className='Meal flex-box column sixth'>
        <div className='column-title'>{`meal#${number}`}</div>
        <div className='timeframe'>
          {subtitle &&
            <div className='column-subtitle'>{subtitle}</div>
          }
          {!subtitle && time &&
            <div className='column-subtitle'>{moment(time).format('h:mma')}</div>
          }
        </div>

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

          {hourRange && time &&
            <div>
              <div className='column-subtitle'>{moment(time).format('h:mma')}</div>

              <TimeChooser
                handleTimeChange={handleTimeChange}
                hourRange={hourRange}
                mealKey={number}
                time={time}
              />
            </div>
          }

          <CarbChooser amount={amounts.carbs}/>

        </div>
      </div>
    );
  }
}

export default Meal;
