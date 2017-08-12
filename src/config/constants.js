const prefix = 'TODO_'

export const TODO = {
    ADD: prefix + 'ADD',
    CHANGE: prefix + 'CHANGE',
    GET_OBSERVABLE: prefix + 'GET_OBSERVABLE',
    GET_SAGA: prefix + 'GET_SAGA',
    GET_COMPLETE: prefix + 'GET_COMPLETE',
    TOGGLE: prefix + 'TOGGLE'
}

export const FILTER = {
    SET_VISIBILITY_FILTER: prefix + 'SET_VISIBILITY_FILTER',
    SHOW_ALL: prefix + 'SHOW_ALL',
    SHOW_ACTIVE: prefix + 'SHOW_ACTIVE',
    SHOW_COMPLETED: prefix + 'SHOW_COMPLETED'
}

export const MIDDLEWARE = {
  OBSERVABLE: 'Observable',
  SAGA: 'Saga',
  THUNK: 'Thunk'
}
