// @flow

import React, { Component } from 'react'

import pencil from './images/pencils.svg'

type Props = {
  valueInput: string,
  handleSubmit: Function,
}

type State = {
  value: string,
  shouldShowInput: boolean,
}

class TimeInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: 'not set yet',
      shouldShowInput: false,
    }
  }

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.handleSubmit(this.state.value)
      this.setState({
        shouldShowInput: false,
      })
    }
  }

  handleClick = () => {
    this.setState({
      value: '',
      shouldShowInput: true,
    })
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      value: nextProps.valueInput,
    })
  }

  render() {
    return (
      <div className='input' onClick={this.handleClick}>
        {this.state.shouldShowInput ?
          <div onKeyPress={this.handleKeyPress}>
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </div> : <div>{this.state.value}</div>}
        <img src={pencil} className='pencil' alt={'pencil'} />
      </div>
    )
  }
}

export default TimeInput
