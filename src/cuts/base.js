// @flow

import type { Cut, ChoiceArray } from './types'

// @ TODO What is base totals?
export const baseTotals = [
  {
    protein: 12,
    veggies: 8,
    fat: 3.5,
    carbs: 105,
    workoutCarbs: 35,
  },
  {
    protein: 12,
    veggies: 8,
    fat: 3.5,
    carbs: 125,
    workoutCarbs: 15,
  },
  {
    protein: 12,
    veggies: 8,
    fat: 3.5,
    carbs: 125,
    workoutCarbs: 15,
  },
  {
    protein: 12,
    veggies: 8,
    fat: 3.5,
    carbs: 125,
    workoutCarbs: 15,
  },
  {
    protein: 15,
    veggies: 10,
    fat: 3.5,
    carbs: 105,
    workoutCarbs: 15,
  },
  {
    protein: 14,
    veggies: 8,
    fat: 6,
    carbs: 70,
    workoutCarbs: 0,
  },
  { // THESE ARE WRONG
    protein: 14,
    veggies: 8,
    fat: 6,
    carbs: 70,
    workoutCarbs: 0,
  },
]

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

const lightOneBase: Cut = {
  title: 'light training day after one meal (base cut)',
  meals: [
    {
      isWorkout: false,
      hourRange: {
        start: 1,
        end: 3,
      },
      hours: {
        after: false,
        number: 1,
        begin: 1,
        end: 3,
      },
      after: false,
      subtitle: '1-3 hours before workout',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: true,
      after: true,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: '1/2 shake during workout, 1/2 right after',
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 15,
      },
    },
    {
      isWorkout: false,
      after: true,
      hourRange: {
        start: 0.666,
        end: 0.666,
      },
      hours: {
        after: true,
        number: 2,
        begin: 0.666,
        end: 0.666,
      },
      subtitle: '40 minutes after workout is over',
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
      hourRange: {
        start: 2,
        end: 4,
      },
      after: true,
      hours: {
        after: true,
        number: 3,
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
        number: 4,
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

const lightFourBase: Cut = {
  title: 'light training day after four meals (BASE)',
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
      hours: null,
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
        start: 1,
        end: 3,
      },
      hours: null,
      subtitle: '1-3 hours before workout',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: true,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: '1/2 during, 1/2 after',
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 15,
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
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 60,
        workoutCarbs: 0,
      },
    },
  ],
}

const lightTwoBase: Cut = {
  title: 'light workout after two meals (base)',
  meals: [
    {
      isWorkout: false,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: 'Waking',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 0,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: false,
      after: false,
      hourRange: {
        start: 1,
        end: 3,
      },
      hours: {
        after: false,
        number: 1,
        begin: 1,
        end: 3,
      },
      subtitle: '1-3 hours before workout',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: true,
      after: true,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: '1/2 shake during workout, 1/2 right after',
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 15,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 0.6666,
        end: 0.6666,
      },
      after: true,
      hours: {
        after: true,
        number: 3,
        begin: 0.6666,
        end: 0.6666,
      },
      subtitle: '40 minutes after workout is over',
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
      hourRange: {
        start: 2,
        end: 4,
      },
      after: true,
      hours: {
        after: true,
        number: 4,
        begin: 2,
        end: 4,
      },
      subtitle: '2-4 hours after last meal',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 1,
        carbs: 35,
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
        carbs: 15,
        workoutCarbs: 0,
      },
    },
  ],
}

const lightThreeBase: Cut = {
  title: 'light workout after three meals (base)',
  meals: [
    {
      isWorkout: false,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: 'Waking',
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
      after: true,
      hourRange: {
        start: 3,
        end: 5,
      },
      hours: {
        after: true,
        number: 1,
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
      after: false,
      hourRange: {
        start: 1,
        end: 3,
      },
      hours: {
        after: false,
        number: 2,
        begin: 1,
        end: 3,
      },
      subtitle: '1-3 hours before workout',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
    },
    {
      isWorkout: true,
      hourRange: {
        start: 0,
        end: 0,
      },
      after: true,
      hours: null,
      subtitle: '1/2 shake during workout, 1/2 right after',
      amounts: {
        protein: 25,
        veggies: 0,
        fat: 0,
        carbs: 0,
        workoutCarbs: 15,
      },
    },
    {
      isWorkout: false,
      hourRange: {
        start: 0.6666,
        end: 0.6666,
      },
      after: true,
      hours: {
        after: true,
        number: 4,
        begin: 0.6666,
        end: 0.6666,
      },
      subtitle: '40 minutes after workout is over',
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
        carbs: 35,
        workoutCarbs: 0,
      },
    },
  ],
}

export const baseChoices: ChoiceArray = [nonTrainingBase, lightZeroBase, lightOneBase, lightTwoBase, lightThreeBase, lightFourBase]
