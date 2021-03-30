import {
  GET_FOOTER_CATEGORIES,
  GET_CATEGORY,
  CATEGORY_ERROR,
  CATEGORIES_ERROR,
} from '../types'

const initialState = {
  loading: true,
  categories: null,
  category: null,
  footercats: null,
  error: {},
}

const categories = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_FOOTER_CATEGORIES:
      return {
        ...state,
        loading: false,
        footercats: payload,
      }
    case GET_CATEGORY:
      return {
        ...state,
        loading: false,
        category: payload,
      }
    case CATEGORIES_ERROR:
    case CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return { ...state }
  }
}

export default categories
