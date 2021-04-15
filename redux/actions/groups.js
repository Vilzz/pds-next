import axios from 'axios'
import { GET_GROUPS, GET_GROUP, CLEAR_GROUPS, GROUPS_ERROR } from '../types.js'

export const getGroups = (id, sort, limit) => async (dispatch) => {
  try {
    const res = await axios.get(
      //Исправить ситуацию с лимитом(поставил наугад) Запрос тестовый //price[lte]=270
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/groups?subcategories=${id}&limit=${limit}${sort}`
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

export const searchByText = (text, id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/groups?search=${text}&subcategories=${id}&limit=1000`
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
