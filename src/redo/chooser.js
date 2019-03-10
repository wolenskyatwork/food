// @flow

import React, { Component } from 'react'
import Option from './option'

type Props = {
  options: Array<Option>,
  optionCallback: Function // can this be typed?
}

type State = {
  optionIndex: number
}

class Chooser extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      optionIndex: 0,
    }
  }

  handleChange = (event: any) => {
    const optionIndex = event.target.value
    this.setState({
      optionIndex,
    }, () => this.props.optionCallback(this.state.optionIndex))
  }

  render() {
    const { optionIndex } = this.state
    const { options } = this.props
    return (
      <div>
        <select value={optionIndex} onChange={this.handleChange}>
          {options.map((option, i) => <option key={i} value={i}>{option.name}</option>)}
        </select>
      </div>
    )
  }
}

export default Chooser
