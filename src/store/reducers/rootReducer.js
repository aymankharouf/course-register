import authReducer from './authReducer'
import studentReducer from './studentReducer'
import notificationReducer from './notificationReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  notification: notificationReducer
})

export default rootReducer