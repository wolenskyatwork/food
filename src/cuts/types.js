// @flow

export type ChoiceArray = Array<Cut>

export type Cut = {
  title: string,
  meals: Array<Meal>,
}

export type Meal = {
  isWorkout: boolean,
  hourRange: {
    start: number,
    end: number,
  },
  hours: ?{
    after: boolean,
    number: number,
    begin: number,
    end: number,
  },
  subtitle: string,
  amounts: {
    protein: number,
    veggies: number,
    fat: number,
    carbs: number,
    workoutCarbs: number,
  },
}
