// @flow

import React, { Component } from 'react'

type Props = {
  thing: string,
}

type State = {
  backgroundColor: 'white' | 'purple'
}

class NewMeal extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      backgroundColor: 'white',
    }
  }

  render() {
    return (<div>New Meal</div>)
  }
}

export default NewMeal
