// @flow

import React, { Component } from 'react'

type Props = {
  label: string,
  handleSubmit: Function,
}

type State = {
  value: string,
}

class TimeInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  render() {
    const { label } = this.props

    return (
      <div className='input'>
        <form onSubmit={this.handleSubmit}>
          <label>
            {label}
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Calculate' />
        </form>
      </div>
    )
  }
}

export default TimeInput
