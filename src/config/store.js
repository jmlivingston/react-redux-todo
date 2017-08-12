import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { epics, reducers, sagas } from '../reducers'

const epicMiddleware = createEpicMiddleware(epics)
const sagaMiddleware = createSagaMiddleware()
const storeEnhancer = applyMiddleware(epicMiddleware, sagaMiddleware, thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(storeEnhancer)
const store = createStore(reducers, enhancer)

sagaMiddleware.run(...sagas)

export default store
