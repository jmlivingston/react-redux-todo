import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import { todoGetEpic } from './TodoEpic'
import { todoSaga } from './TodoSaga'
import todo from './TodoReducer'
import visibilityFilter from './VisibilityReducer'

const epics = combineEpics(todoGetEpic)

const reducers = combineReducers({
  todo,
  visibilityFilter
})

const sagas = [todoSaga]

export { epics, reducers, sagas }
