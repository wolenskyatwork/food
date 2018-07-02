// @flow

import { Node, ranges, UPDATES } from '../../../classes/node'
import { LinkedList } from '../../../classes/linked_list'

export function getNewLightAfterFourTraining(newMealCallback: Function)  {
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
    },
    {
      name: 'second',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 15,
        workoutCarbs: 0,
      },
      subtitle: '3-5 after last meal',
      updates: UPDATES.NEXT,
    },
    {
      name: 'third',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 15,
        workoutCarbs: 0,
      },
      subtitle: '3-5 after last meal',
      updates: UPDATES.AFTER,
    },
    {
      name: 'fourth',
      range: ranges.oneThreeRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
      subtitle: '1-3 hours before workout',
      updates: UPDATES.NONE,
    },
    {
      name: 'fifth',
      range: ranges.none,
      isWorkout: true,
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 15,
      },
      subtitle: '1/2 shake during workout, 1/2 right after',
      updates: UPDATES.BOTH,
    },
    {
      name: 'sixth',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 60,
        workoutCarbs: 0,
      },
      subtitle: 'bedtime',
      updates: UPDATES.NONE,
    },
  ]

  const linkedList = new LinkedList('base light after four meals')

  meals.forEach((meal) => linkedList.push(new Node(meal, newMealCallback)))

  return linkedList
}
