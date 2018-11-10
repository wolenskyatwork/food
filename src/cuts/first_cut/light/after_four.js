// @flow

import { Node, ranges, UPDATES } from '../../../classes/node'
import { LinkedList } from '../../../classes/linked_list'

const protein = [3, 3, 3, 3, 25, 3]
const veggies = [2, 2, 2, 2, 0, 0]
const fat = [0, 0, 0.5, 0.5, 0, 0.5]
const carbs = [0, 15, 15, 35, 0, 60]
const workoutCarbs = [0, 0, 0, 0, 15, 0]


export function getNewLightAfterFourTraining(newMealCallback: Function)  {
  const meals = [
    {
      name: 'first',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: protein[0],
        veggies: veggies[0],
        fat: fat[0],
        carbs: carbs[0],
        workoutCarbs: workoutCarbs[0],
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
        protein: protein[1],
        veggies: veggies[1],
        fat: fat[1],
        carbs: carbs[1],
        workoutCarbs: workoutCarbs[1],
      },
      subtitle: '3-5 after last meal',
      updates: UPDATES.NEXT,
      isShake: false,
    },
    {
      name: 'third',
      range: ranges.threeFiveRange,
      isWorkout: false,
      amounts: {
        protein: protein[2],
        veggies: veggies[2],
        fat: fat[2],
        carbs: carbs[2],
        workoutCarbs: workoutCarbs[2],
      },
      subtitle: '3-5 after last meal',
      updates: UPDATES.AFTER,
      isShake: false,
    },
    {
      name: 'fourth',
      range: ranges.oneThreeRange,
      isWorkout: false,
      amounts: {
        protein: protein[3],
        veggies: veggies[3],
        fat: fat[3],
        carbs: carbs[3],
        workoutCarbs: workoutCarbs[3],
      },
      subtitle: '1-3 hours before workout',
      updates: UPDATES.NONE,
      isShake: false,
    },
    {
      name: 'fifth',
      range: ranges.none,
      isWorkout: true,
      amounts: {
        protein: protein[4],
        veggies: veggies[4],
        fat: fat[4],
        carbs: carbs[4],
        workoutCarbs: workoutCarbs[4],
      },
      subtitle: '1/2 shake during workout, 1/2 right after',
      updates: UPDATES.BOTH,
      isShake: true,
    },
    {
      name: 'sixth',
      range: ranges.emptyRange,
      isWorkout: false,
      amounts: {
        protein: protein[5],
        veggies: veggies[5],
        fat: fat[5],
        carbs: carbs[5],
        workoutCarbs: workoutCarbs[5],
      },
      subtitle: 'bedtime',
      updates: UPDATES.NONE,
      isShake: false,
    },
  ]

  const linkedList = new LinkedList('first cut light after four meals')

  meals.forEach((meal) => linkedList.push(new Node(meal, newMealCallback)))

  return linkedList
}
