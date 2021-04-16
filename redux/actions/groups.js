import axios from 'axios'
import { GET_GROUPS, GET_GROUP, CLEAR_GROUPS, GROUPS_ERROR } from '../types.js'

export const getSortedGroups = ({subcategories, find, sort}, limit) => async (dispatch) => {
  try {
    const res = await axios.get(
     `${process.env.NEXT_PUBLIC_DEV_SERVER}/groups${subcategories}&limit=${limit}${sort}${find}`
    )
    dispatch({
      type: GET_GROUPS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GROUPS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
export const getGroups = (subcategories, limit=1000) => async (dispatch) => {
 
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/groups${subcategories}&limit=${limit}`
    )
    dispatch({
      type: GET_GROUPS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GROUPS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

export const searchByText = ({subcategories, find, sort}, limit=1000) => async (dispatch) => {
  try {
     const res = await axios.get(
       `${process.env.NEXT_PUBLIC_DEV_SERVER}/groups${subcategories}${find}&limit=${limit}`
     )
    dispatch({
      type: GET_GROUPS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: GROUPS_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

export const clearGroups = () => (dispatch) => {
  dispatch({
    type: CLEAR_GROUPS,
  })
}
