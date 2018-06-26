// @flow

import React, { Component } from 'react'
import Foods, { carbPercentages } from './foods'

type Props = {
  amount: number,
}

type State = {
  carb: string, // Carb type? Exciting
  value: number,
}

class CarbChooser extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      carb: Foods.carbs[0],
      value: 0,
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
    const { amount } = this.props

    return (
      <div className='carbbox'>
        <form onSubmit={this.handleSubmit}>
          <label>
            What carbs are you going to eat?
            <select value={this.state.value} onChange={this.handleChange}>
              {Foods.carbs.map((eachcarb, i) => <option key={i} value={eachcarb}>{eachcarb}</option>)}
            </select>
          </label>
        </form>
        <div>
          <div><span className='bold'>Carb Weight: </span>{(amount / carbPercentages[carb]).toFixed(3)} grams</div>
        </div>
      </div>
    )
  }
}

export default CarbChooser
