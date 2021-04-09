import axios from 'axios'
import { SUBCATEGORY_ERROR, GET_SUBCATEGORY } from '../types'

export const getSubCategory = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories?slug=${slug}&select=groups`
    )
    dispatch({
      type: GET_SUBCATEGORY,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: SUBCATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
