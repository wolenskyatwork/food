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

const carbs = [
  'Rice',
  'Oatmeal',
  'Sweet Potatoes',
  'Quinoa',
  'Fruit',
];

export const lightFirst = {
  times: {
    meal1: '2/3 on waking, 1/3 during workout',
    meal2: '20 minutes after workout',
    meal3: [2,4],
    meal4: [3,5],
    meal5: [3,5],
    meal6: 'bedtime',
  },
  amounts: {
    meal1: {
      protein: '25g whey',
      veggie: '',
      fat: '',
      carb: '',
      workoutCarb: 35,
    },
    meal2: {
      protein: 3,
      veggie: 2,
      fat: 0.5,
      carb: 40,
      workoutCarb: '',
    },
    meal3: {
      protein: 3,
      veggie: 2,
      fat: 0.5,
      carb: 35,
      workoutCarb: '',
    },
    meal4: {
      protein: 3,
      veggie: 2,
      fat: 0.5,
      carb: 15,
      workoutCarb: '',
    },
    meal5: {
      protein: 3,
      veggie: 2,
      fat: 1,
      carb: 15,
      workoutCarb: '',
    },
    meal6: {
      protein: '25g casein',
      veggie: '',
      fat: 1,
      carb: '',
      workoutCarb: '',
    },
  },
}

export default {
  meats,
  vegetables,
  fats,
  carbs,
}
