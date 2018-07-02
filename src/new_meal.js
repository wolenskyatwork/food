// @flow

import React, { Component } from 'react'
import moment from 'moment'

import TimeInput from './new-time-input'
import CarbChooser from './carb-chooser'
import Foods, { carbPercentages } from './foods'

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
      node.setMealTime(moment(input, 'hh:mm a'))
    }
  }

  render() {
    const { node } = this.props

    if (!node) { return null }
    const amounts: Amounts = node.getAmounts()
    const classes = 'Meal sixth'

    return (
      <div className={`${classes} ${this.state.backgroundColor}`}>
        <div className='meal-header'>
          <div className='column-title'>{node.getIsWorkout() ? 'workout meal' : `${node.getName()} meal`}</div>
          <div className='column-subtitle'>{node.getSubtitle()}</div>
        </div>

        <div>
          <TimeInput valueInput={node.getMealTimeAsString()} handleSubmit={this.handleMealTimeSubmit} />
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
          { (amounts.carbs !== 0 || amounts.workoutCarbs !== 0) &&
            <CarbChooser
              amount={amounts.carbs || amounts.workoutCarbs}
              foodArray={Foods.carbs}
              weightHash={carbPercentages}
            />
          }
        </div>
      </div>
    )
  }
}

export default NewMeal
