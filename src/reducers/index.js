import { combineReducers } from 'redux'

import todo from './TodoReducer'
import visibilityFilter from './VisibilityReducer'

const todoApp = combineReducers({
  todo,
  visibilityFilter
})

export default todoApp
