import { FILTER } from '../config/constants'

const visibilityFilter = (state = FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case FILTER.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
