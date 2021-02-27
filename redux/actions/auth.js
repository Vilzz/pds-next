import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { setAlert } from './alerts'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
} from '../types'

export const loadUser = () => async (dispatch) => {
  if (typeof window !== 'undefined' && localStorage.token) {
    setAuthToken(localStorage.token)
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_DEV_SERVER}/auth/me`
      )
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      })
    }
  } else {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/auth/login`,
      body,
      config
    )
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    dispatch(loadUser())
    return true
  } catch (err) {
    const errors = err.response.data.error.split(',')
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, 'danger')))
    }
    dispatch({ type: LOGIN_FAIL })
    return false
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT })
}

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify({ name, email, password })
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/auth/register`,
      body,
      config
    )

    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        token: res.data.token,
        isAuthenticated: res.data.isAuthenticated,
        success: res.data.success,
      },
    })
    dispatch(loadUser())
    dispatch(
      setAlert(`Пользователь ${name} успешно зарегистрирован`, 'success')
    )
    return true
  } catch (err) {
    const errors = err.response.data.error.split(',')
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error, 'danger')))
    }
    dispatch({
      type: REGISTER_FAIL,
    })
    return false
  }
}
