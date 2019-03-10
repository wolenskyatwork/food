// @flow

import React, { Component } from 'react'
import moment from 'moment'

import TimeInput from './new-time-input'
import CarbChooser from './carb-chooser'
import Foods, {carbPercentages, workoutCarbPercentages} from './foods'

type Props = {
  node: ?Node,
  putFunction?: Function,
}

type State = {
  backgroundColor: 'white' | 'purple',
  fatChoice: number
}

class NewMeal extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      backgroundColor: 'white',
      fatChoice: 0,
    }
  }

  handleMealTimeSubmit = (input: any) => {
    const { node } = this.props

    if (node) {
      node.setMealTime(moment(input, 'hh:mm a'))
    }
  }

  handleFatChange = (event: any) => {
    this.setState({
      fatChoice: event.target.value,
    })
  }

  render() {
    const { node } = this.props

    if (!node) { return null }
    const amounts: Amounts = node.getAmounts()
    const classes = 'Meal sixth'
    const { fatChoice } = this.state

    return (
      <div className={`${classes} ${this.state.backgroundColor}`}>
        <div className='meal-header'>
          <div className='column-title'>
            {node.getIsWorkout() ? 'workout meal' : `${node.getName()} meal`}
            <div className='column-subtitle'>{node.getSubtitle()}</div>
          </div>
          {/* div className={'complete-button'} onClick={() => this.props.putFunction(Math.random())}>Complete</div> */ }
        </div>

        <div>
          <TimeInput valueInput={node.getMealTimeAsString()} handleSubmit={this.handleMealTimeSubmit} />
        </div>

          <div>
          { amounts.protein &&
            <div>
              <span className='bold'>Protein: </span>
              <span>{`${node.getIsShake() ? `${amounts.protein}grams (shake)` : `${112/21 * 0.69 * amounts.protein} grams uncooked`}`}</span>
            </div>
          }
          { amounts.veggies !== 0 &&
            <div>
              <span className='bold'>Veggies: </span>
              <span>{`${amounts.veggies} small handfuls`}</span>
            </div>
          }
          { amounts.fat !== 0 &&
            <div>
              <span className='bold'>Fat: </span>
              <span>{`${amounts.fat * 15}g, ${amounts.fat} serving`}</span>
              <div className='bold'>
                <div>Fat Choices by Serving:</div>
                <form>
                  <select value={fatChoice} onChange={this.handleFatChange}>
                    {Foods.fats.map((fatChoice, i) => <option key={i} value={fatChoice}>{fatChoice}</option>)}
                  </select>
                </form>
              </div>
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
          { amounts.carbs !== 0 &&
            <CarbChooser
              amount={amounts.carbs}
              foodArray={Foods.carbs}
              weightHash={carbPercentages}
            />
          }
          { amounts.workoutCarbs !== 0 &&
            <CarbChooser
              amount={amounts.workoutCarbs}
              foodArray={Foods.workoutCarbs}
              weightHash={workoutCarbPercentages}
            />
          }
        </div>
      </div>
    )
  }
}

export default NewMeal
