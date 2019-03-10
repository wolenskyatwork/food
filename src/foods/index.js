// @flow

import React from "react"

export type FoodArray = Array<string>

const vegetables: FoodArray = [
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
]

const meats: FoodArray = [
  'Any fish',
  'Any seafood',
  'Chicken breast',
  'Turkey breast',
  'Any meat 90% or leaner',
  'Egg whites', //  (count in grams of protein, not ounces)
]

const fats: FoodArray = [
  'Small handful of any nuts',
  '1/2 avocado',
  '1 tbsp olive oil',
  '1 tbsp canola oil',
  '2 tbsp nut butter',
]

export const carbPercentages = {
  'Cooked Sweet Potatoes': 3.40493150685, // 0.2,
  // Cooked rice: 910 g = 235.2 g of carbs
  'Rice': (910 / 235.2),
  // 'Cooked Rice': 0.25846,
  Strawberries: 12.5, // (100 g strawberries = 8 g carb)
  Bananas: (100 / 23), // 100 g = 23 g c
  Blueberries: (100 / 14),
  Apple: (100 / 14),
}

export const workoutCarbPercentages = {
  'Coconut Water': 11/157.8,
  // 'Gatorade': 1,
  // 'Powerade': 1,
  // 'Fruit Juice': 1,
}

const workoutCarbs = Object.keys(workoutCarbPercentages)
const carbs = Object.keys(carbPercentages)

export default {
  meats,
  vegetables,
  fats,
  carbs,
  workoutCarbs,
}
