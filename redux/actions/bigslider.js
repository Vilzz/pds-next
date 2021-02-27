import axios from 'axios'
import { setAlert } from '../actions/alerts'
import {
  MAIN_SLIDER_GET,
  MAIN_SLIDER_CREATE,
  MAIN_SLIDER_DELETE,
  MAIN_SLIDER_UPDATE,
  MAIN_SLIDER_ERROR,
  GET_SLIDER_IMAGES,
  SLIDER_IMAGES_ERROR,
} from '../types'

export const getSlideImages = (folder) => async (dispatch) => {
  try {
    const images = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/${folder}`
    )
    dispatch({
      type: GET_SLIDER_IMAGES,
      payload: images.data,
    })
  } catch (err) {
    dispatch({
      type: SLIDER_IMAGES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
    dispatch(
      setAlert(
        `Ошибка - ${err.response.statusText} статус : ${err.response.status}`,
        'danger'
      )
    )
  }
}

export const getMainSliders = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/slider`)
    dispatch({
      type: MAIN_SLIDER_GET,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: MAIN_SLIDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
    dispatch(
      setAlert(
        `Ошибка - ${err.response.statusText} статус : ${err.response.status}`,
        'danger'
      )
    )
  }
}
