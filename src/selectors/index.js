import { createSelector } from 'reselect'

import { FILTER } from '../config/constants'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todo.todos

export const getVisibleTodos = createSelector(
    getVisibilityFilter, getTodos,
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case FILTER.SHOW_ALL:
                return todos
            case FILTER.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed)
            case FILTER.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed)
            default:
                return todos
        }
    }
)
