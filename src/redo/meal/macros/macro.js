// @flow

import React, { Component } from 'react'
import Chooser from '../../chooser'
import Option from '../../option'
import './index.css'

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
        <div className='display-flex'>
          <span className={'bold'}>{`${this.props.macro}:`}</span>
          {(amount * currentOption.converter).toFixed(1)} {currentOption.unit}
          <div className={'chooser-container'}><Chooser
            options={options}
            optionCallback={this.optionCallback}
          /></div>
        </div>
      </div>
    )
  }
}

export default Macro
