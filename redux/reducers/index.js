import { combineReducers } from 'redux'
import alerts from './alerts'
import textsliders from './textslider'
import auth from './auth'
import bigsliders from './bigslider'
import categories from './categories'

export default combineReducers({
  alerts,
  textsliders,
  auth,
  bigsliders,
  categories,
})
