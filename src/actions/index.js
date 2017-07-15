import { filterTypes, todoTypes } from '../types'

export const todoAdd = text => ({
  type: todoTypes.TODO_ADD
})

export const todoChange = todoAddValue => ({
  type: todoTypes.TODO_CHANGE,
  todoAddValue
})

export const todoToggle = id => ({
  type: todoTypes.TODO_TOGGLE,
  id
})

export const setVisibilityFilter = filter => ({
  type: filterTypes.SET_VISIBILITY_FILTER,
  filter
})
