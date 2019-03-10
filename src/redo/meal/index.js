// @flow

import React, { Component } from 'react'
import Macro from './macros/macro'
import Option from "../option"
import moment from "moment"
import TimeInput from "../../new-time-input"

type Props = {
  node: Node
}

class Meal extends Component<Props, State> {
  handleMealTimeSubmit = (input: any) => {
    const { node } = this.props

    if (node) {
      node.setMealTime(moment(input, 'hh:mm a'))
    }
  }

  renderWorkoutMeal(workoutCarbs) {
    return (
      <div>
        <Macro
          macro={'Protein'}
          options={[
            new Option('powdered protein  ', 1, 'grams'),
          ]}
          amount={25}
        />
        <Macro
          macro={'Workout Carbs'}
          options={[
            new Option('coconut water', 11/157.8, 'grams'),
          ]}
          amount={workoutCarbs}
        />
      </div>
    )
  }

  renderRegularMeal(node) {
    return (
      <div>
        <Macro
          macro={'Protein'}
          options={[
            new Option('uncooked lean meat', 4.72492222, 'grams'),
            new Option('cooked lean meat', 3.1499, 'grams'),
            new Option('egg whites', 2, 'grams'),
            new Option('powder', 3, 'scoops'),
          ]}
          amount={node.amounts.protein}
        />
        <Macro
          macro={'Carbs'}
          options={[
            new Option('sweet potato', (3.40493150685), 'grams'),
            new Option('rice', (910 / 235.2), 'grams'),
            new Option('bananas', 100/23, 'grams'),
            new Option('blueberries', 100/14, 'grams'),
            new Option('apples', 100/14, 'grams'),
          ]}
          amount={node.amounts.carbs}
        />
        <Macro
          macro={'Fat'}
          options={[
            new Option('fake Fat placeholder', (3.40493150685), 'grams'),
          ]}
          amount={node.amounts.fat}
        />
        <Macro
          macro={'Veggies'}
          options={[
            new Option('spinach/mushroom/onion', 1, 'small handfuls'),
          ]}
          amount={2}
        />
      </div>
    )
  }

  render() {
    const { node } = this.props

    return (
      <div className={'meal sixth'}>
        <div className={'meal-title'}>
          <div>{node.name} meal</div>
          <div>{node.subtitle}</div>
        </div>
        <div>
          <TimeInput valueInput={node.getMealTimeAsString()} handleSubmit={this.handleMealTimeSubmit} />
        </div>
        <div>
          { node.isWorkout ? this.renderWorkoutMeal(node.amounts.workoutCarbs) : this.renderRegularMeal(node) }
        </div>
      </div>
    )
  }
}

export default Meal
