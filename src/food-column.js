// @flow

import React, { Component } from 'react'

type Props = {
  choices: Object,
  column: string,
}

class FoodColumn extends Component<Props> {
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
