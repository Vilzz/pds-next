import {
  TEXT_SLIDER_GET,
  TEXT_SLIDER_CREATE,
  TEXT_SLIDER_DELETE,
  TEXT_SLIDER_UPDATE,
  TEXT_SLIDER_ERROR,
} from '../types'

const initialState = {
  loading: true,
  textsliders: null,
  error: {},
}

const textsliders = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TEXT_SLIDER_GET:
      return {
        ...state,
        loading: false,
        textsliders: payload,
      }
    case TEXT_SLIDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default textsliders
