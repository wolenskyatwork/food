// @flow

import { Node, emptyRange, threeFiveRange } from '../../../classes/node'
import { LinkedList } from '../../../classes/linked_list'
import moment from 'moment'

// name: string, range: Range, isWorkout: boolean, amounts: Amounts, subtitle: string

// protein: number,
// veggies: number,
// fat: number,
// carbs: number,
// workoutCarbs: number,

export function getNewNonTraining()  {
  const meals = [
    new Node('first', emptyRange, false, {
      protein: 3,
      veggies: 2,
      fat: 1,
      carbs: 0,
      workoutCarbs: 0,
    }, 'waking'),
    new Node('second', threeFiveRange, false, {
      protein: 3,
      veggies: 2,
      fat: 1,
      carbs: 0,
      workoutCarbs: 0,
    }, '3-5 hours after last meal'),
    new Node('third', threeFiveRange, false, {
      protein: 4,
      veggies: 2,
      fat: 1,
      carbs: 20,
      workoutCarbs: 0,
    }, '3-5 hours after last meal'),
    new Node('fourth', threeFiveRange, false, {
      protein: 4,
      veggies: 2,
      fat: 1,
      carbs: 25,
      workoutCarbs: 0,
    }, '3-5 hours after last meal'),
    new Node('fifth', emptyRange, false, {
      protein: 3,
      veggies: 0,
      fat: 2,
      carbs: 25,
      workoutCarbs: 0,
    }, 'bedtime'),
  ]

  const linkedList = new LinkedList()

  meals.forEach((meal) => linkedList.push(meal))

  linkedList.setMealTimeByName('first', moment({ hour: 7, minute: 5 }))

  linkedList.printNodeByName('first')
  return linkedList
}
