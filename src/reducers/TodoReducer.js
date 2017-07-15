import uuid from 'uuid'

import { todoTypes } from '../types'

const todo = (state = { todos: [], todoAddValue: '', error: '' }, action) => {
  switch (action.type) {
    case todoTypes.TODO_ADD:
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
    case todoTypes.TODO_CHANGE:
      return {
        ...state,
        todoAddValue: action.todoAddValue
      }
    case todoTypes.TODO_GET_COMPLETE:
      return {
        ...state,
        todos: action.todos
      }            
    case todoTypes.TODO_TOGGLE:
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
