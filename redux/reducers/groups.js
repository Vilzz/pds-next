import { GET_GROUPS, GET_GROUP, CLEAR_GROUPS, GROUPS_ERROR } from '../types.js'

const initialState = {
  loading: true,
  group: null,
  groups: null,
  error: {},
}

const groups = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_GROUPS:
      return {
        ...state,
        loading: false,
        groups: payload,
      }
    case GET_GROUP:
      return {
        ...state,
        loading: false,
        group: payload,
      }
    case CLEAR_GROUPS:
      return {
        ...state,
        loading: false,
        groups: null,
      }
    case GROUPS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return { ...state }
  }
}
export default groups
