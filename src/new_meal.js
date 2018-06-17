// @flow

import React, { Component } from 'react'
import moment from 'moment'

import TimeInput from './time-input'
import CarbChooser from './carb-chooser'

type Props = {
  node: ?Node,
}

type State = {
  backgroundColor: 'white' | 'purple',
}

class NewMeal extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      backgroundColor: 'white',
    }
  }

  handleMealTimeSubmit = (input: any) => {
    const { node } = this.props

    if (node) {
      const time = moment({ hour: input })
      node.setMealTime(time)
    }
  }

  render() {
    const { node } = this.props

    if (!node) {
      return <div>This meal isnt set up yet</div>
    }
    const amounts: Amounts = node.getAmounts()
    const classes = 'Meal flex-box column sixth'

    return (
      <div className={`${classes} ${this.state.backgroundColor}`}>
        <div className='meal-title'>
          <div className='column-title'>{node.getName()} meal</div>
          {node.getIsWorkout() &&
            <div className=''>Workout Meal</div>
          }
        </div>
        <div className='timeframe'>
          <div className='column-subtitle'>{node.getSubtitle()}</div>
          <div className='column-subtitle'>{node.getMealTimeAsString()}</div>
        </div>

        <div>
          <div>When will you actually eat this meal or finish this workout?</div>
          <TimeInput label={'time'} handleSubmit={this.handleMealTimeSubmit} />
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
          {/* hourRange && time &&
            <div>
              <div className='column-subtitle'>{moment(time).format('h:mma')}</div>

              <TimeChooser
                handleTimeChange={handleTimeChange}
                hourRange={hourRange}
                mealKey={number}
                time={time}
              />
            </div>
           */}
          { amounts.carbs !== 0 &&
            <CarbChooser amount={amounts.carbs}/>
          }
        </div>
      </div>
    )
  }
}

export default NewMeal
