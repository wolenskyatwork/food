// @flow

import React, { Component } from 'react'
import CarbChooser from './carb-chooser'

type Props = {
  node: ?Node,
}

type State = {
  backgroundColor: 'white' | 'purple',
}

// import me
type Amounts = {
  protein: number,
  veggies: number,
  fat: number,
  carbs: number,
  workoutCarbs: number,
}

class NewMeal extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      backgroundColor: 'white',
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
