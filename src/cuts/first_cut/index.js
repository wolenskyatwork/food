// @flow

import { getNewNonTraining } from './non_training'

import { getNewLightFirstThingTraining } from './light/first_thing'
import { getNewLightAfterOneTraining } from './light/after_one'
import { getNewLightAfterTwoTraining } from './light/after_two'
import { getNewLightAfterThreeTraining } from './light/after_three'
import { getNewLightAfterFourTraining } from './light/after_four'

import { getNewModerateFirstThingTraining } from './moderate/first_thing'
import { getNewModerateAfterOneTraining } from './moderate/after_one'
import { getNewModerateAfterTwoTraining } from './moderate/after_two'
import { getNewModerateAfterThreeTraining } from './moderate/after_three'
import { getNewModerateAfterFourTraining } from './moderate/after_four'

export const firstCutTrainingPlans = (handleNewMealTime: Function): Array<LinkedList> => [
  getNewNonTraining(handleNewMealTime),
  getNewLightFirstThingTraining(handleNewMealTime),
  getNewLightAfterOneTraining(handleNewMealTime),
  getNewLightAfterTwoTraining(handleNewMealTime),
  getNewLightAfterThreeTraining(handleNewMealTime),
  getNewLightAfterFourTraining(handleNewMealTime),
  getNewModerateFirstThingTraining(handleNewMealTime),
  getNewModerateAfterOneTraining(handleNewMealTime),
  getNewModerateAfterTwoTraining(handleNewMealTime),
  getNewModerateAfterThreeTraining(handleNewMealTime),
  getNewModerateAfterFourTraining(handleNewMealTime),
]
