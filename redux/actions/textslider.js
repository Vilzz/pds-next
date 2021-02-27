import axios from 'axios'
import {
  TEXT_SLIDER_CREATE,
  TEXT_SLIDER_GET,
  TEXT_SLIDER_UPDATE,
  TEXT_SLIDER_DELETE,
  TEXT_SLIDER_ERROR,
} from '../types'

import { setAlert } from './alerts.js'

export const getTextSliders = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_SERVER}/settings/textslider`
    )
    dispatch({
      type: TEXT_SLIDER_GET,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: TEXT_SLIDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
    dispatch(
      setAlert(
        `Ошибка - ${err.response.statusText} статус: ${err.response.status}`,
        'danger'
      )
    )
  }
}
