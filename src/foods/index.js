// @flow

type FoodArray = Array<string>

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

const workoutCarbs: FoodArray = [
  'Gatorade',
  'Powerade',
  'Fruit Juice',
  'Coconut Water',
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
  'Cooked Rice': 0.25846,
  'Dry Oatmeal': 0.7143,
  'Cooked Sweet Potatoes': 0.2,
  'Cooked Quinoa': 0.35,
  Strawberries: 0.08,
  Bananas: 0.23,
  Blueberries: 0.15,
  Apple: 0.14,
}

const carbs = Object.keys(carbPercentages)

export default {
  meats,
  vegetables,
  fats,
  carbs,
  workoutCarbs,
}
