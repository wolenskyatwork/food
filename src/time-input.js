import React, { Component } from 'react'

class TimeInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) {
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
