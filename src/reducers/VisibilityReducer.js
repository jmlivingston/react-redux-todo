import { filterTypes } from '../types'

const visibilityFilter = (state = filterTypes.SHOW_ALL, action) => {
  switch (action.type) {
    case filterTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
