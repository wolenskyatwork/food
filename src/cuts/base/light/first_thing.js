// @flow

import { Node, ranges } from '../../../classes/node'
import { LinkedList } from '../../../classes/linked_list'

export function getNewLightFirstThingTraining(newMealCallback: Function)  {
  const meals = [
    {
      name: 'first',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 35,
      },
      subtitle: 'Drink 2/3 of workout shake upon waking, 1/3 during workout',
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
    },
  ]

  const linkedList = new LinkedList('base light first thing')

  meals.forEach((meal) => linkedList.push(new Node(meal, newMealCallback)))

  return linkedList
}
