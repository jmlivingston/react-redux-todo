import { filterTypes, todoTypes } from '../types'

export const todoAdd = text => ({
  type: todoTypes.ADD
})

export const todoChange = todoAddValue => ({
  type: todoTypes.CHANGE,
  todoAddValue
})

export const todoToggle = id => ({
  type: todoTypes.TOGGLE,
  id
})

export const setVisibilityFilter = filter => ({
  type: filterTypes.SET_VISIBILITY_FILTER,
  filter
})
