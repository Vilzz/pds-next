import {
  MAIN_SLIDER_GET,
  MAIN_SLIDER_CREATE,
  MAIN_SLIDER_DELETE,
  MAIN_SLIDER_UPDATE,
  MAIN_SLIDER_ERROR,
  GET_SLIDER_IMAGES,
  SLIDER_IMAGES_ERROR,
} from '../types'

const initialState = {
  bigsliders: null,
  loading: true,
  images: null,
  error: {},
}

const bigsliders = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_SLIDER_IMAGES:
      return {
        ...state,
        loading: false,
        images: payload,
      }
    case MAIN_SLIDER_GET:
      return {
        ...state,
        bigsliders: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default bigsliders
