import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import todo from './TodoReducer'
import todoEpic from './TodoEpic'
import visibilityFilter from './VisibilityReducer'

const epics = combineEpics(todoEpic)
const reducers = combineReducers({
  todo,
  visibilityFilter
})

export { epics, reducers}
