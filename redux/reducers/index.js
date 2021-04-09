import { combineReducers } from 'redux'
import alerts from './alerts.js'
import textsliders from './textslider.js'
import auth from './auth.js'
import bigsliders from './bigslider.js'
import categories from './categories.js'
import subcategories from './subcategories.js'
import groups from './groups.js'

export default combineReducers({
  alerts,
  textsliders,
  auth,
  bigsliders,
  categories,
  subcategories,
  groups,
})
