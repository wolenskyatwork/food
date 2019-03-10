// @flow
import moment from 'moment'

type Range = {
  earliest: ?number,
  latest: ?number,
}

const emptyRange: Range = { earliest: null, latest: null }
const threeFiveRange: Range = { earliest: 3, latest: 5 }
const twoFourRange: Range = { earliest: 2, latest: 4 }
const oneThreeRange: Range = { earliest: 1, latest: 3 }
const twentyMinRange: Range = { earliest: 0.33, latest: 0.33 }
const fortyMinuteRange: Range = { earliest: 0.66, latest: 0.66 }

export const ranges: { [string]: Range } = {
  emptyRange,
  threeFiveRange,
  twentyMinRange,
  twoFourRange,
  oneThreeRange,
  fortyMinuteRange,
}

export type Amounts = {
  protein: number,
  veggies: number,
  fat: number,
  carbs: number,
  workoutCarbs: number,
}

export type Updates = 'prev' | 'next' | 'none' | 'prevAndNext'
export const UPDATES: { [string]: Updates  } = {
  PREV: 'prev',
  NEXT: 'next',
  NONE: 'none',
  BOTH: 'prevAndNext',
}

type NodeConfig = {
  name: string,
  range: Range,
  isWorkout: boolean,
  amounts: Amounts,
  subtitle: string,
  updates: Updates,
  isShake: boolean,
}

export class Node {
  next: Node
  prev: Node
  name: string
  mealTime: ?Moment
  range: Range
  startTime: Moment
  endTime: Moment
  isWorkout: boolean
  subtitle: string
  amounts: Amounts
  updates: Updates
  newMealCallback: (string, string) => void

  constructor(nodeConfig: NodeConfig, newMealCallback: (string, string) => void) {
    const {
      name,
      range,
      isWorkout,
      amounts,
      subtitle,
      updates,
      isShake,
    } = nodeConfig

    this.name = name
    this.range = range
    this.isWorkout = isWorkout
    this.amounts = amounts
    this.subtitle = subtitle
    this.newMealCallback = newMealCallback
    this.updates = updates
    this.isShake = isShake
  }

  setMealTime(time: Moment) {
    this.mealTime = time
    this.newMealCallback(this.getName(), this.getMealTimeAsString())

    if (this.updates === UPDATES.NEXT || this.updates === UPDATES.BOTH) {
      this.next && this.next.getUpdateFromPrev(time)
    }

    if (this.updates === UPDATES.PREV || this.updates === UPDATES.BOTH) {
      this.prev && this.prev.getUpdateFromNext(time)
    }
  }

  getUpdateFromPrev(prevTime: Moment) {
    this.startTime = moment(prevTime).add(this.range.earliest, 'hours')
    if (!this.mealTime || this.mealTime !== this.startTime) {
      this.setMealTime(this.startTime)
    }
  }

  getUpdateFromNext(nextTime: Moment) {
    this.endTime = moment(nextTime).subtract(this.range.earliest, 'hours')
    if (!this.mealTime || this.mealTime !== this.endTime) {
      this.setMealTime(this.endTime)
    }
  }

  getIsShake(): boolean {
    return this.isShake
  }

  getIsWorkout(): boolean {
    return this.isWorkout
  }

  getIsWaking(): boolean {
    return this.name === 'first' && !this.isWorkout
  }

  getAmounts(): Amounts {
    return this.amounts
  }

  getSubtitle(): string {
    return this.subtitle
  }

  getName(): string {
    return this.name
  }

  getMealTime(): Moment {
    return this.mealTime
  }

  getMealTimeAsString(): string {
    return this.getMealTime() ? this.getMealTime().format('h:mm a') : 'not set yet'
  }

  setNext(node: Node) {
    this.next = node
  }

  setPrev(node: Node) {
    this.prev = node
  }

  getNext(): Node {
    return this.next
  }

  getPrev(): Node {
    return this.prev
  }
}
