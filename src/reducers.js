import { SET_SEARCH_TERM } from './constants'

const initialState = {
  searchTerm: '',
}

export const searchRobotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }
    default:
      return state
  }
}
