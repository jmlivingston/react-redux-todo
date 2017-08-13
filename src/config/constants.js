const prefix = 'TODO_'

export const TODO = {
    ADD: prefix + 'ADD',
    CHANGE: prefix + 'CHANGE',
    GET_TODO_OBSERVABLE: prefix + 'GET_TODO_OBSERVABLE',
    GET_TODO_SAGA: prefix + 'GET_TODO_SAGA',
    GET_COMPLETE: prefix + 'GET_COMPLETE',
    TOGGLE: prefix + 'TOGGLE',
    UPDATE_MIDDLEWARE: prefix + 'UPDATE_MIDDLEWARE'
}

export const FILTER = {
    SET_VISIBILITY_FILTER: prefix + 'SET_VISIBILITY_FILTER',
    SHOW_ALL: prefix + 'SHOW_ALL',
    SHOW_ACTIVE: prefix + 'SHOW_ACTIVE',
    SHOW_COMPLETED: prefix + 'SHOW_COMPLETED'
}

export const MIDDLEWARE = {
  NONE: 'None',
  OBSERVABLE: 'Observable',
  SAGA: 'Saga',
  THUNK: 'Thunk'
}
