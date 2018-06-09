// @flow
import moment from 'moment'

type Range = {
  earliest: ?number,
  latest: ?number,
}

export const emptyRange: Range = { earliest: null, latest: null }
export const threeFiveRange: Range = { earliest: 3, latest: 5 }

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

  constructor(name: string, range: Range, isWorkout: boolean, amounts: Amounts, subtitle: string) {
    this.name = name
    this.range = range
    this.isWorkout = isWorkout
    this.amounts = amounts
    this.subtitle = subtitle
  }

  setMealTime(time: Moment) {
    this.mealTime = time
    console.log(time.format("h:mm a"))
    console.log(this.mealTime.format("h:mm a"))

    // this.prev && this.prev.getUpdateFromNext(time)
    this.next && this.next.getUpdateFromPrev(time)
  }

  // called on 'next' with new meal time to trigger updates
  getUpdateFromPrev(prevTime: Moment) {
    this.startTime = moment(prevTime).add(this.range.earliest, 'hours')
    if (!this.mealTime) {
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
    return this.getMealTime().format('h:mm a')
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
