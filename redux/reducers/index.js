import { combineReducers } from 'redux'
import alerts from './alerts'
import textsliders from './textslider'
import auth from './auth'
import bigsliders from './bigslider'

export default combineReducers({ alerts, textsliders, auth, bigsliders })
