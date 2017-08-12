import uuid from 'uuid'

import { TODO } from '../config/constants'

const todo = (state = { todos: [], todoAddValue: '', error: '' }, action) => {
  switch (action.type) {
    case TODO.ADD:
      if(!state.todoAddValue.trim()) {
        return { ...state, error: 'Empty todo not allowed.' }
      }
      if(state.todos.find(todo => todo.text === state.todoAddValue)) {
        return { ...state, error: 'Duplicate todo not allowed.' }
      }
      return {
        ...state,
        todos: [ ...state.todos, {
          id: uuid(),
          text: state.todoAddValue,
          completed: false
        }],
        error: '',
        todoAddValue: ''
      }
    case TODO.CHANGE:
      return {
        ...state,
        todoAddValue: action.todoAddValue
      }
    case TODO.GET_COMPLETE:
      return {
        ...state,
        todos: action.todos
      }            
    case TODO.TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      }
    default:
      return state
  }
}

export default todo
