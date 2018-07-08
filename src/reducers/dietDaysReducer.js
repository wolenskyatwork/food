// @flow

import initialState from './initialState'
import { FETCH_DIETDAYS, RECEIVE_DIETDAYS } from '../actions/actionTypes'

export default function dietDays(state = initialState, action) {
    let newState
    switch (action.type) {
        case FETCH_DIETDAYS:
            console.log('fetching diet days')
            return action // I think this is wrong?
        case RECEIVE_DIETDAYS:
            console.log('receiving')
            newState = action.dietDays
            return newState
        default:
            return state
    }
}
