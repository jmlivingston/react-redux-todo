import { combineReducers } from 'redux'

import todo from './TodoReducer'
import visibilityFilter from './VisibilityReducer'

const reducers = combineReducers({
  todo,
  visibilityFilter
})

export default reducers
