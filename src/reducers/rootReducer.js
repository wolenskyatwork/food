// @flow

import { combineReducers } from 'redux'
import dietDays from './dietDaysReducer'

const rootReducer = combineReducers({
    dietDays,
})

export default rootReducer
