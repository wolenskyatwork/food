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
        hours,
        isWorkout,
      },
      handleTimeChange,
      time,
      times,
      updateTime,
    } = this.props;

    let displayTime;

    if (hours && times && (hours.number || hours.number === 0) && times[hours.number]) {
      displayTime = times[hours.number].add(hours.begin, 'hours');
    } else {
      displayTime = time
    }

    if (time === null && displayTime) {
      // updateTime(number, displayTime);
    }

    return (
      <div className='Meal flex-box column sixth'>
        <div className='column-title'>{`meal#${number}`}</div>
        <div className='timeframe'>
          {isWorkout &&
            <div className=''>Workout Meal</div>
          }
          {subtitle &&
            <div className='column-subtitle'>{subtitle}</div>
          }
          {displayTime &&
            <div className='column-subtitle'>{moment(displayTime).format('h:mma')}</div>
          }
        </div>

        <div>
          <div>
            <div>{`Protein: ${amounts.protein} grams`}</div>
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
