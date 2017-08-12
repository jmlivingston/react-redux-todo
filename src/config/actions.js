import { FILTER, TODO } from '../config/constants'

export const todoAdd = text => ({
  type: TODO.ADD
})

export const todoChange = todoAddValue => ({
  type: TODO.CHANGE,
  todoAddValue
})

export const todoToggle = id => ({
  type: TODO.TOGGLE,
  id
})

export const setVisibilityFilter = filter => ({
  type: FILTER.SET_VISIBILITY_FILTER,
  filter
})
