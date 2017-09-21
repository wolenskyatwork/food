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
  'Rice': 0.27,
  'Oatmeal': 0.7,
  'Sweet Potatoes': 0.2,
  'Quinoa': 0.6,
  'Strawberries': 0.08,
  'Bananas': 0.23,
  'Blueberries': 0.15,
  'Apple': 0.14,
};

const carbs = Object.keys(carbPercentages);

const lightFirst = {
  first: {
    hourRange: null,
    subtitle: '2/3 on waking, 1/3 during workout',
    amounts: {
      protein: '25g whey',
      veggies: 0,
      fat: 0,
      carbs: 0,
      workoutCarbs: 35,
    },
  },
  second: {
    hourRange: null,
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
    hourRange: [2,4],
    subtitle: null,
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 0.5,
      carbs: 35,
      workoutCarbs: 0,
    },
  },
  fourth: {
    hourRange: [3,5],
    subtitle: null,
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 0.5,
      carbs: 15,
      workoutCarbs: 0,
    },
  },
  fifth: {
    hourRange: [3,5],
    subtitle: null,
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 1,
      carbs: 15,
      workoutCarbs: 0,
    },
  },
  sixth: {
    hourRange: null,
    subtitle: 'bedtime',
    amounts: {
      protein: '25g casein',
      veggies: 0,
      fat: 1,
      carbs: 0,
      workoutCarbs: 0,
    },
  }
};

const lightLast = {
  first: {
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
  second: {
    hourRange: [3,5],
    subtitle: null,
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 0.5,
      carbs: 15,
      workoutCarbs: 0,
    },
  },
  third: {
    hourRange: [3,5],
    subtitle: null,
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 0.5,
      carbs: 15,
      workoutCarbs: 0,
    },
  },
  fourth: {
    hourRange: [1,3],
    subtitle: null,
    amounts: {
      protein: 3,
      veggies: 2,
      fat: 0.5,
      carbs: 35,
      workoutCarbs: 0,
    },
  },
  fifth: {
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
  sixth: {
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
}

export const afterChoices = [lightFirst, null, null, null, lightLast];

export default {
  meats,
  vegetables,
  fats,
  carbs,
}
