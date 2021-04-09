import { GET_SUBCATEGORY, SUBCATEGORY_ERROR } from '../types'

const initialState = {
  loading: true,
  subcategories: null,
  subcategory: null,
  error: {},
}

const subcategories = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_SUBCATEGORY:
      return {
        ...state,
        loading: false,
        subcategory: payload,
      }
    case SUBCATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default subcategories
