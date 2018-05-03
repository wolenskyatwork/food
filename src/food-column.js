// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

class FoodColumn extends Component {
  render() {
    const { choices, column } = this.props

    return (
      <div className='foodcolumn flex-box column'>
        <div className='column-title'>{column}</div>
        <div>
          {choices.map((choice, i) => <div key={i} className='food'>{choice}</div>)}
        </div>
      </div>
    )
  }
}

export default FoodColumn
