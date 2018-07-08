// @flow

import { Node, ranges, UPDATES } from '../../classes/node'
import { LinkedList } from '../../classes/linked_list'

export function getNewNonTraining(newMealCallback: Function)  {
  const meals = [
    {
      name: 'first',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 0,
        workoutCarbs: 0,
      },
      subtitle: 'waking',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'second',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 0,
        workoutCarbs: 0,
      },
      subtitle: '3-5 hours after last meal',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'third',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: 4,
        veggies: 2,
        fat: 1,
        carbs: 20,
        workoutCarbs: 0,
      },
      subtitle: '3-5 hours after last meal',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'fourth',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: 4,
        veggies: 2,
        fat: 1,
        carbs: 25,
        workoutCarbs: 0,
      },
      subtitle: '3-5 hours after last meal',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'fifth',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: 30,
        veggies: 0,
        fat: 2,
        carbs: 25,
        workoutCarbs: 0,
      },
      subtitle: 'bedtime',
      updates: UPDATES.NONE,
      isShake: true,
    },
  ]

  const linkedList = new LinkedList('base non training')

  meals.forEach((meal) => linkedList.push(new Node(meal, newMealCallback)))

  return linkedList
}
