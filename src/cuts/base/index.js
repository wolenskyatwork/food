// @flow

import { getNewNonTraining } from './non_training'
import { getNewLightFirstThingTraining } from './light/first_thing'
import { getNewLightAfterOneTraining } from './light/after_one'
import { getNewLightAfterTwoTraining } from './light/after_two'
import { getNewLightAfterThreeTraining } from './light/after_three'
import { getNewLightAfterFourTraining } from './light/after_four'

export const baseTrainingPlans = (handleNewMealTime: Function): Array<LinkedList> => [
  getNewNonTraining(handleNewMealTime),
  getNewLightFirstThingTraining(handleNewMealTime),
  getNewLightAfterOneTraining(handleNewMealTime),
  getNewLightAfterTwoTraining(handleNewMealTime),
  getNewLightAfterThreeTraining(handleNewMealTime),
  getNewLightAfterFourTraining(handleNewMealTime),
]
