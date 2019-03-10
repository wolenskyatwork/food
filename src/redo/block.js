// @flow

import React, { Component } from 'react'

type Props = {
  day: number,
  workout: string,
  complete: Boolean
}

type State = {
  diet: Boolean,
}

export default class P90XBlock extends Component<Props, State> {
  constructor() {
    super()
  }

  render() {
    const styles = this.props.complete ? 'P90X-block complete' : 'P90X-block'

    return (
      <div className={styles}>
        <div className='day-number'>{this.props.day}</div>
        <div className='workout-title'>{this.props.workout}</div>
      </div>
    )
  }

}
