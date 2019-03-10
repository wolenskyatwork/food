//@flow
import React, { Component } from 'react'
import P90XBlock from './block'

export default class BlockContainer extends Component<Props, State> {
  constructor() {
    super()

    const workoutKey = {
      chestBack: 'Chest & Back, Ab Ripper X',
      plyo: 'Plyometrics',
      shoulders: 'Shoulders & Arms, Ab Ripper X',
      yoga: 'Yoga X',
      legsBack: 'Legs & Backs, Ab Ripper X',
      kenpo: 'Kenpo X',
      rest: 'Rest or X Stretch',
      core: 'Core Synergistics',
      chestTri: 'Chest, Shoulders & Triceps, Ab Ripper X',
      backBi: 'Back & Biceps, Ab Ripper X',

    }

    const first_adaptive = [
      workoutKey.chestBack,
      workoutKey.plyo,
      workoutKey.shoulders,
      workoutKey.yoga,
      workoutKey.legsBack,
      workoutKey.kenpo,
      workoutKey.rest,
    ]

    const recovery = [
      workoutKey.yoga,
      workoutKey.core,
      workoutKey.kenpo,
      workoutKey.rest,
      workoutKey.core,
      workoutKey.yoga,
      workoutKey.rest,
    ]


    const second_adaptive = [
      workoutKey.chestTri,
      workoutKey.plyo,
      workoutKey.backBi,
      workoutKey.yoga,
      workoutKey.legsBack,
      workoutKey.kenpo,
      workoutKey.rest,
    ]

    this.workoutList = [
      ...first_adaptive,
      ...first_adaptive,
      ...first_adaptive,
      ...recovery,
      ...second_adaptive,
      ...second_adaptive,
      ...second_adaptive,
      ...recovery,
      ...first_adaptive,
      ...second_adaptive,
      ...first_adaptive,
      ...second_adaptive,
      workoutKey.yoga,
      workoutKey.core,
      workoutKey.kenpo,
      workoutKey.rest,
      workoutKey.core,
      workoutKey.yoga,
      workoutKey.rest,
    ]

    console.log(this.workoutList.length)

    this.state = {
      lastCompleted: 28,
    }
  }

  render() {

    const mappedDays = this.workoutList.map((workoutTitle, index) => {
      return <P90XBlock key={index} day={index + 1} workout={workoutTitle} complete={index < this.state.lastCompleted}/>
    })

    return (
      <div className='block-container'>
        { mappedDays }
      </div>
    )
  }

}
