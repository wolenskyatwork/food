// @flow

import React, { Component } from 'react'
import TimeChooser from './time-chooser'
import CarbChooser from './carb-chooser'
import moment from 'moment'

class Meal extends Component {
  constructor() {
    super()

    this.state = {
      backgroundColor: 'white',
    }
  }

  render() {
    const {
      number,
      plan,
      handleTimeChange,
      time,
      times,
      updateTime,
    } = this.props

    const {
      subtitle,
      amounts,
      hourRange,
      hours,
      isWorkout,
    } = plan[number]
    console.log(this.props)
    console.log(hourRange, hours, isWorkout)
    let displayTime

    if (hours && times && (hours.number || hours.number === 0) && times[hours.number]) {
      displayTime = times[hours.number].add(hours.begin, 'hours')
    } else {
      displayTime = time
    }

    if (time === null && displayTime) {
      // updateTime(number, displayTime);
    }
    const classes = 'Meal flex-box column sixth'

    return (
      <div className={`${classes} ${this.state.backgroundColor}`}>
        <div className='meal-title'>
          <div className='column-title'>{`meal#${number + 1}`}</div>
          {isWorkout &&
            <div className=''>Workout Meal</div>
          }
        </div>
        <div className='timeframe'>
          {subtitle &&
            <div className='column-subtitle'>{subtitle}</div>
          }
          {displayTime &&
            <div className='column-subtitle'>{moment(displayTime).format('h:mma')}</div>
          }
        </div>

        <div>
          { amounts.protein &&
            <div>
              <span className='bold'>Protein: </span>
              <span>{`${amounts.protein} ounces`}</span>
            </div>
          }
          { amounts.veggies !== 0 &&
            <div>
              <span className='bold'>Veggies: </span>
              <span>{`${amounts.veggies} handfuls`}</span>
            </div>
          }
          { amounts.fat !== 0 &&
            <div>
              <span className='bold'>Fat: </span>
              <span>{`${amounts.fat} serving`}</span>
            </div>
          }
          { amounts.carbs !== 0 &&
            <div>
              <span className='bold'>Carbs: </span>
              <span>{`${amounts.carbs} grams`}</span>
            </div>
          }
          { amounts.workoutCarbs !== 0 &&
            <div>
              <span className='bold'>Workout Carbs: </span>
              <span>{`${amounts.workoutCarbs} grams`}</span>
            </div>
          }
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
          { amounts.carbs !== 0 &&
            <CarbChooser amount={amounts.carbs}/>
          }
        </div>
      </div>
    )
  }
}

export default Meal
