// @flow

import { Node } from './node'
import { Moment } from 'moment'

export class LinkedList {
  head: ?Node
  last: ?Node
  nodes: Object // @TODO I think there is a better way to type this
  title: string

  constructor(title: string) {
    this.nodes = {}
    this.title = title
    this.setMealTimeByName = this.setMealTimeByName.bind(this)
  }

  setMealTimeByName(name: string, time: Moment) {
    const nodeByName = this.getNodeByName(name)
    nodeByName && nodeByName.setMealTime(time)
  }

  setWorkoutMealTime(time: Moment) {
    let workoutNode = null
    let currNode = this.head

    while (!workoutNode) {
      if (currNode.isWorkout) {
        workoutNode = currNode
      } else {
        currNode = currNode.getNext()
      }
    }

    if (workoutNode) {
      workoutNode.setMealTime(time)
    } else {
      console.warn('no workout node was found')
    }
  }

  push(node: Node) {
    if (!this.head) {
      this.head = node
      this.last = node
    } else {
      this.last.next = node
      node.prev = this.last
      this.last = node
    }

    if (!this.nodes[node.name]) {
      this.nodes[node.name] = node
    } else {
      console.warn('you have already inserted a node named ', node.name)
    }
  }

  getNodeByName(name: string): ?Node {
    if (this.nodes[name]) { return this.nodes[name] }
    console.warn('there is no node with the key ', name)
  }

  printNodeByName(name: string) {
    console.log(this.getNodeByName(name))
  }

  print() {
    let node = this.head
    while (node) {
      console.log(node)
      node = node.next
    }
  }
}
