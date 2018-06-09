import type { Cut, ChoiceArray } from './types'

const moderateOneCutOne: Cut = {
  title: 'Moderate workout after one meal (Cut one)',
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
        fat: 0,
        carbs: 50,
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
        workoutCarbs: 20,
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
        carbs: 60,
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
        carbs: 50,
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
        fat: 0.5,
        carbs: 20,
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
        fat: 0.5,
        carbs: 0,
        workoutCarbs: 0,
      },
    },
  ],
}

const moderateAfterThreeCutOne: Cut = {
  title: 'Moderate workout after three meals (cut one)',
  meals: [
    {
      isWorkout: false,
      hourRange: {
        start: 0,
        end: 0,
      },
      hours: null,
      subtitle: 'Upon waking',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0,
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
        after: false,
        number: 1,
        begin: 3,
        end: 5,
      },
      subtitle: '3-5 hours after last meal',
      amounts: {
        protein: 3,
        veggies: 2,
        fat: 0,
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
        fat: 0.5,
        carbs: 35,
        workoutCarbs: 0,
      },
    },
  ],
}

const nonTrainingCutOne: Cut = {
  title: 'not training day on cut one',
  meals: [
  {
    hours: null,
    isWorkout: false,
    hourRange: {
      start: 0,
      end: 0,
    },
    subtitle: 'waking',
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
    hours: null,
    hourRange: {
      start: 3,
      end: 5,
    },
    subtitle: '3-5 hours after last meal',
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 0.5,
      carbs: 0,
      workoutCarbs: 0,
    },
  },
  {
    hours: null,
    isWorkout: false,
    hourRange: {
      start: 3,
      end: 5,
    },
    subtitle: '3-5 hours after last meal',
    amounts: {
      protein: 4,
      veggies: 2,
      fat: 0.5,
      carbs: 20,
      workoutCarbs: 0,
    },
  },
  {
    isWorkout: false,
    hours: null,
    hourRange: {
      start: 3,
      end: 5,
    },
    subtitle: '3-5 hours after last meal',
    amounts: {
      protein: 4,
      veggies: 2,
      fat: 0.5,
      carbs: 25,
      workoutCarbs: 0,
    },
  },
  {
    hours: null,
    isWorkout: false,
    hourRange: {
      start: 0,
      end: 0,
    },
    subtitle: 'bedtime',
    amounts: {
      protein: 30,
      veggies: 0,
      fat: 0.5,
      carbs: 25,
      workoutCarbs: 0,
    },
  },
],
}

const lightZeroCutOne: Cut = {
  title: 'light training day after zero meals (cut one)',
  meals: {
    waking: {
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
    second: {
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
    third: {
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
        fat: 0,
        carbs: 35,
        workoutCarbs: 0,
      },
    },
    fourth: {
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
    fifth: {
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
        fat: 0.5,
        carbs: 15,
        workoutCarbs: 0,
      },
    },
    sixth: {
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
        fat: 0.5,
        carbs: 0,
        workoutCarbs: 0,
      },
    },
  },
}

export const afterChoices: ChoiceArray = [nonTrainingCutOne, lightZeroCutOne, moderateOneCutOne, moderateAfterThreeCutOne]
