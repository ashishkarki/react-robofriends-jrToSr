import { SET_SEARCH_TERM } from './constants'

export const setSearchTermAction = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  }
}
