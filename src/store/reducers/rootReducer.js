import authReducer from './authReducer'
import studentReducer from './studentReducer'
import notificationReducer from './notificationReducer'
import timesReducer from './timesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  notification: notificationReducer,
  times: timesReducer
})

export default rootReducer