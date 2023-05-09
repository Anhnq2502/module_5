import { combineReducers } from 'redux'
import { manageUserReducer } from './reducer'

export const rootReducer = combineReducers ({
    userManagementState: manageUserReducer
})