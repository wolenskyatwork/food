// @flow

export type ChoiceArray = Array<Cut>

export type Cut = {
  title: string,
  meals: {
    waking: Meal,
    second: Meal,
    third: Meal,
    fourth: Meal,
    fifth: Meal,
    sixth?: Meal,
  },
}

export type Meal = {|
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
  updates?: 'waking' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth',
|}
