// @flow

import type { Cut, ChoiceArray } from './types'

const nonTrainingBase: Cut = {
  title: 'non training day on base',
  meals: [
    {
      isWorkout: false,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: 'waking',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 0,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 3,
        end: 5,
      },
      hours: null,
      subtitle: '3-5 hours after last meal',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 0,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 3,
        end: 5,
      },
      subtitle: '3-5 hours after last meal',
      hours: null,
      amounts: {
        protein: 4,
        veggies: 2,
        fat: 1,
        carbs: 20,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 3,
        end: 5,
      },
      hours: null,
      subtitle: '3-5 hours after last meal',
      amounts: {
        protein: 4,
        veggies: 2,
        fat: 1,
        carbs: 25,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      hours: null,
      hourRange: {
        start: 0,
        end: 0,
      },
      subtitle: 'bedtime',
      amounts: {
        protein: 30,
        veggies: 0,
        fat: 2,
        carbs: 25,
        workoutCarbs: 0,
      },
    },
  ],
}

const lightZeroBase: Cut = {
  title: 'light training after zero meals (upon waking) BASE',
  meals: [
    {
      isWorkout: true,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: '2/3 on waking, 1/3 during workout',
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 35,
      },
    },
    {
      isWorkout: false,
      after: true,
      hourRange: {
        start: 0.34,
        end: 0.34,
      },
      hours: {
        after: true,
        number: 0,
        begin: 0.34,
        end: 0.34,
      },
      subtitle: '20 minutes after workout',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 40,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      after: true,
      hourRange: {
        start: 2,
        end: 4,
      },
      hours: {
        after: true,
        number: 1,
        begin: 2,
        end: 4,
      },
      subtitle: '2-4 hours after last meal',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 3,
        end: 5,
      },
      after: true,
      hours: {
        after: true,
        number: 2,
        begin: 3,
        end: 5,
      },
      subtitle: '3-5 hours after last meal',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 15,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 3,
        end: 5,
      },
      after: true,
      hours: {
        after: true,
        number: 3,
        begin: 3,
        end: 5,
      },
      subtitle: '3-5 hours after last meal',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 15,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: 'bedtime',
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 1,
        carbs: 0,
        workoutCarbs: 0,
      },
    },
  ],
}


export const baseChoices: ChoiceArray = [nonTrainingBase, lightZeroBase, lightOneBase, lightTwoBase, lightThreeBase, lightFourBase]
