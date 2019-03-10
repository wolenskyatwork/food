// @flow

import React, { Component } from 'react'
import Chooser from '../../chooser'
import Option from '../../option'

type Props = {
  amount: number,
  options: Array<Option>,
  macro: string
}

type State = {
  currentOptionIndex: number
}

class Macro extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      currentOptionIndex: 0,
    }
  }

  optionCallback = (optionIndex: number) => {
    this.setState({
      currentOptionIndex: optionIndex,
    })
  }

  render() {
    const { currentOptionIndex } = this.state
    const { amount, options } = this.props

    const currentOption = options[currentOptionIndex]

    return (
      <div>
        <div className='display-flex'>{`${this.props.macro}:`}<Chooser
          options={options}
          optionCallback={this.optionCallback}
        /></div>{currentOption.name}{(amount * currentOption.converter).toFixed(1)} {currentOption.unit}
      </div>
    )
  }
}

export default Macro
