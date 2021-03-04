import axios from 'axios'
import { GET_FOOTER_CATEGORIES, CATEGORIES_ERROR } from '../types'

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
