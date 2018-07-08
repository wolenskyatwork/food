// @flow

import { Node, ranges, UPDATES } from '../../../classes/node'
import { LinkedList } from '../../../classes/linked_list'

export function getNewLightFirstThingTraining(newMealCallback: Function)  {
  const meals = [
    {
      name: 'first',
      range: ranges.emptyRange,
      isWorkout: true,
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 35,
      },
      subtitle: 'Drink 2/3 of workout shake upon waking, 1/3 during workout',
      updates: UPDATES.NEXT,
      isShake: true,
    },
    {
      name: 'second',
      range: ranges.twentyMinRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 40,
        workoutCarbs: 0,
      },
      subtitle: '20 minutes after workout is over',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'third',
      range: ranges.twoFourRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
      subtitle: '2-4 hours after last meal',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'fourth',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 15,
        workoutCarbs: 0,
      },
      subtitle: '3-5 hours after last meal',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'fifth',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 15,
        workoutCarbs: 0,
      },
      subtitle: '3-5 hours after last meal',
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
        carbs: 0,
        workoutCarbs: 0,
      },
      subtitle: 'bedtime',
      updates: UPDATES.NONE,
      isShake: true,
    },
  ]

  const linkedList = new LinkedList('base light first thing')

  meals.forEach((meal) => linkedList.push(new Node(meal, newMealCallback)))

  return linkedList
}
