// @flow

import React, { Component } from 'react'
import { FoodArray } from './foods'


type Props = {
  amount: number,
  foodArray: FoodArray,
  weightHash: Object, // Better way to type this
}

type State = {
  carb: string, // Carb type? Exciting
}

class CarbChooser extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      carb: props.foodArray[0],
    }

  }

  handleChange = (event: any) => {
    this.setState({
      carb: event.target.value,
    })
  }

  handleSubmit(event: any) {
    console.log('handle submit in carb chooser', event)
  }

  render() {
    const { carb } = this.state
    const { amount, foodArray, weightHash } = this.props
    return (
      <div className='carbbox'>
        <form onSubmit={this.handleSubmit}>
          <label>
            What carbs are you going to eat?
            <select value={carb} onChange={this.handleChange}>
              {foodArray.map((foodChoice, i) => <option key={i} value={foodChoice}>{foodChoice}</option>)}
            </select>
          </label>
        </form>
        <div>
          <div><span className='bold'>Food Weight: </span>{(amount / weightHash[carb]).toFixed(3)} grams</div>
        </div>
      </div>
    )
  }
}

export default CarbChooser
