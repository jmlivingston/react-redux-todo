const prefix = 'TODO_'

export const todoTypes = {
    ADD: prefix + 'ADD',
    CHANGE: prefix + 'CHANGE',
    GET: prefix + 'GET',
    GET_COMPLETE: prefix + 'GET_COMPLETE',
    TOGGLE: prefix + 'TOGGLE'
}

export const filterTypes = {
    SET_VISIBILITY_FILTER: prefix + 'SET_VISIBILITY_FILTER',
    SHOW_ALL: prefix + 'SHOW_ALL',
    SHOW_ACTIVE: prefix + 'SHOW_ACTIVE',
    SHOW_COMPLETED: prefix + 'SHOW_COMPLETED'
}
