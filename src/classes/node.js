// @flow
import moment from 'moment'

type Range = {
  earliest: ?number,
  latest: ?number,
}

const emptyRange: Range = { earliest: null, latest: null }
const threeFiveRange: Range = { earliest: 3, latest: 5 }
const twoFourRange: Range = { earliest: 2, latest: 4 }
const twentyMinRange: Range = { earliest: 0.33, latest: 0.33 }

export const ranges: { [string]: Range } = {
  emptyRange,
  threeFiveRange,
  twentyMinRange,
  twoFourRange,
}

type NodeConfig = {
  name: string,
  range: Range,
  isWorkout: boolean,
  amounts: Amounts,
  subtitle: string,
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
  newMealCallback: (string, string) => void

  constructor(nodeConfig: NodeConfig, newMealCallback: (string, string) => void) {
    const {
      name,
      range,
      isWorkout,
      amounts,
      subtitle,
    } = nodeConfig

    this.name = name
    this.range = range
    this.isWorkout = isWorkout
    this.amounts = amounts
    this.subtitle = subtitle
    this.newMealCallback = newMealCallback
  }

  setMealTime(time: Moment) {
    this.mealTime = time
    console.log(time.format("h:mm a"))
    this.newMealCallback(this.getName(), this.getMealTimeAsString())
    // this.prev && this.prev.getUpdateFromNext(time)
    this.next && this.next.getUpdateFromPrev(time)
  }

  // called on 'next' with new meal time to trigger updates
  getUpdateFromPrev(prevTime: Moment) {
    this.startTime = moment(prevTime).add(this.range.earliest, 'hours')
    if (!this.mealTime || this.mealTime !== this.startTime) {
      this.setMealTime(this.startTime)
    }
  }

  getUpdateFromNext(nextTime: Moment) {
    // this.endTime = nextTime.subtract(this.range.latest, 'hours') //
    // console.log(this.endTime, 'no idea how to do this')
  }

  getIsWorkout(): boolean {
    return this.isWorkout
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
