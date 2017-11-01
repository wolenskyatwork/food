const vegetables = [
  'Broccoli',
  'Spinach',
  'Lettuce',
  'Onions',
  'Tomatoes',
  'Green Peppers',
  'Asparagus',
  'Cabbage',
  'Cauliflower',
  'Celery',
  'Cucumbers',
  'Brussel Sprouts',
  'Green Beans',
  'Mushrooms',
  'Yellow Squash',
  'Zucchini',
];

const workoutCarbs = [
    'Gatorade',
    'Powerade',
    'Fruit Juice',
    'Coconut Water',
];

const meats = [
  'Any fish',
  'Any seafood',
  'Chicken breast',
  'Turkey breast',
  'Any meat 90% or leaner',
  'Egg whites', //  (count in grams of protein, not ounces)
];

const fats = [
  'Small handful of any nuts',
  '1/2 avocado',
  '1 tbsp olive oil',
  '1 tbsp canola oil',
  '2 tbsp nut butter',
];

export const carbPercentages = {
  'Cooked Rice': 0.25846,
  'Dry Oatmeal': 0.7143,
  'Cooked Sweet Potatoes': 0.2,
  'Cooked Quinoa': 0.35, // .21
  'Strawberries': 0.08,
  'Bananas': 0.23,
  'Blueberries': 0.15,
  'Apple': 0.14,
};

const carbs = Object.keys(carbPercentages);

const lightZeroBase = [
  {
    isWorkout: true,
    hourRange: null,
    hours: null,
    subtitle: '2/3 on waking, 1/3 during workout',
    amounts: {
      protein: '25g whey',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 35,
    },
  },
  {
    isWorkout: false,
    after: true,
    hourRange: [.34,.34],
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
    hourRange: [2,4],
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
    hourRange: [3,5],
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
    hourRange: [3,5],
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
    hourRange: null,
    hours: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '25g casein',
      veggies: 0,
      fat: 1,
      carbs: 0,
      workoutCarbs: 0,
    },
  }
];

const lightOneBase = [
  {
    isWorkout: false,
    hourRange: [1,3],
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
      fat: .5,
      carbs: 35,
      workoutCarbs: 0,
    },
  },
  {
    isWorkout: true,
    after: true,
    hourRange: null,
    hours: null,
    subtitle: '1/2 shake during workout, 1/2 right after',
    amounts: {
      protein: '25 g whey protein',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 15,
    },
  },
  {
    isWorkout: false,
    after: true,
    hourRange: [0.666,0.666],
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
    hourRange: [2-4],
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
    hourRange: [3,5],
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
    hourRange: null,
    hours: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '25g casein',
      veggies: 0,
      fat: 1,
      carbs: 0,
      workoutCarbs: 0,
    },
  }
];

const moderateOneCutOne = [
  {
    isWorkout: false,
    hourRange: [1,3],
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
      fat: 0,
      carbs: 50,
      workoutCarbs: 0,
    },
  },
  {
    isWorkout: true,
    after: true,
    hourRange: null,
    hours: null,
    subtitle: '1/2 shake during workout, 1/2 right after',
    amounts: {
      protein: '25 g whey protein',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 20,
    },
  },
  {
    isWorkout: false,
    after: true,
    hourRange: [0.666,0.666],
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
    hourRange: [2-4],
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
    hourRange: [3,5],
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
    hourRange: null,
    hours: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '25g casein',
      veggies: 0,
      fat: 0.5,
      carbs: 0,
      workoutCarbs: 0,
    },
  }
];

const moderateAfterThreeCutOne = [
  {
    isWorkout: false,
    hourRange: null,
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
    hourRange: [3,5],
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
    hourRange: [1,3],
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
    hourRange: [2-4],
    after: true,
    hours: {
      after: true,
      number: 3,
      begin: 2,
      end: 4,
    },
    subtitle: '1/2 shake during workout, 1/2 right after',
    amounts: {
      protein: '25g whey protein in water',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 15,
    },
  },
  {
    isWorkout: false,
    hourRange: [3,5],
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
    hourRange: null,
    hours: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '25g casein',
      veggies: 0,
      fat: 0.5,
      carbs: 35,
      workoutCarbs: 0,
    },
  }
];

const lightTwoBase = [
  {
    isWorkout: false,
    hourRange: null,
    hours: null,
    subtitle: 'Waking',
    amounts: {
      protein: 3,
      veggies: 2,
      fat: .5,
      carbs: 0,
      workoutCarbs: 0,
    },
  },
  {
    isWorkout: false,
    after: false,
    hourRange: [1,3],
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
    hourRange: null,
    hours: null,
    subtitle: '1/2 shake during workout, 1/2 right after',
    amounts: {
      protein: '25 g whey protein',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 15,
    },
  },
  {
    isWorkout: false,
    hourRange: [.6666, .6666],
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
    hourRange: [2,4],
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
    hourRange: null,
    hours: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '25g casein',
      veggies: 0,
      fat: 1,
      carbs: 15,
      workoutCarbs: 0,
    },
  }
];

const lightThreeBase = [
  {
    isWorkout: false,
    hourRange: null,
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
    hourRange: [3,5],
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
    hourRange: [1,3],
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
    hourRange: null,
    after: true,
    hours: null,
    subtitle: '1/2 shake during workout, 1/2 right after',
    amounts: {
      protein: '25 g whey protein',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 15,
    },
  },
  {
    isWorkout: false,
    hourRange: [0.6666, 0.6666],
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
    hourRange: null,
    hours: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '25g casein',
      veggies: 0,
      fat: 1,
      carbs: 35,
      workoutCarbs: 0,
    },
  }
];

const lightFourBase = [
  {
    isWorkout: false,
    hourRange: null,
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
    hourRange: [3,5],
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
    hourRange: [3,5],
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
    hourRange: [1,3],
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
    hourRange: null,
    subtitle: '1/2 during, 1/2 after',
    amounts: {
      protein: '25g whey',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 15,
    },
  },
  {
    isWorkout: false,
    hourRange: null,
    subtitle: 'bedtime',
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 1,
      carbs: 60,
      workoutCarbs: 0,
    },
  },
];

const nonTrainingBase = [
  {
    isWorkout: false,
    hourRange: null,
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
    hourRange: [3,5],
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
    hourRange: [3,5],
    subtitle: '3-5 hours after last meal',
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
    hourRange: [3,5],
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
    hourRange: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '30 g casein',
      veggies: 0,
      fat: 2,
      carbs: 25,
      workoutCarbs: 0,
    },
  },
];

const nonTrainingCutOne = [
  {
    isWorkout: false,
    hourRange: null,
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
    hourRange: [3,5],
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
    isWorkout: false,
    hourRange: [3,5],
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
    hourRange: [3,5],
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
    isWorkout: false,
    hourRange: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '30 g casein',
      veggies: 0,
      fat: 0.5,
      carbs: 25,
      workoutCarbs: 0,
    },
  },
];
// lightZeroBase, lightOneBase, lightTwoBase, lightThreeBase, lightFourBase,
export const afterChoices = [nonTrainingCutOne, moderateOneCutOne, moderateAfterThreeCutOne];

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
];

export default {
  meats,
  vegetables,
  fats,
  carbs,
  workoutCarbs,
}
