import axios from 'axios'
import {
  GET_FOOTER_CATEGORIES,
  CATEGORIES_ERROR,
  GET_CATEGORY,
  CATEGORY_ERROR,
} from '../types'

export const getFooterCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/categories?showinmenu=true&select=name,_id,slug,-subcategories`
    )
    dispatch({
      type: GET_FOOTER_CATEGORIES,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

export const getCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/categories/${id}`
    )
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
