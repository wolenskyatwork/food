// @flow

import { Node, ranges, UPDATES } from '../../../classes/node'
import { LinkedList } from '../../../classes/linked_list'

export function getNewLightAfterTwoTraining(newMealCallback: Function)  {
  const meals = [
    {
      name: 'first',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 0,
        workoutCarbs: 0,
      },
      subtitle: 'waking',
      updates: UPDATES.NONE,
      isShake: false,
    },
    {
      name: 'second',
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
      isShake: false,
    },
    {
      name: 'third',
      range: ranges.emptyRange,
      isWorkout: true,
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 15,
      },
      subtitle: 'Drink 1/2 shake during workout, 1/2 right after',
      updates: UPDATES.BOTH,
      isShake: true,
    },
    {
      name: 'fourth',
      range: ranges.fortyMinuteRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 40,
        workoutCarbs: 0,
      },
      subtitle: '40 minutes after workout is over',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'fifth',
      range: ranges.twoFourRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 35,
        workoutCarbs: 0,
      },
      subtitle: '2-4 hours after last meal',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'sixth',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 1,
        carbs: 15,
        workoutCarbs: 0,
      },
      subtitle: 'bedtime',
      updates: UPDATES.NONE,
      isShake: true,
    },
  ]

  const linkedList = new LinkedList('base light after two meals')

  meals.forEach((meal) => linkedList.push(new Node(meal, newMealCallback)))

  return linkedList
}
