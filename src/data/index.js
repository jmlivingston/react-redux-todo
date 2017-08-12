import uuid from 'uuid'

export const todos = [{
  id: uuid(),
  text: 'Wash dishes',
  completed: true
}, {
  id: uuid(),
  text: 'Feed the cat',
  completed: false
}, {
  id: uuid(),
  text: 'Walk the dog',
  completed: true
}, {
  id: uuid(),
  text: 'Run the lake',
  completed: false
}]

export const todosEpic = todos.map(todo => ({ ...todo, text: todo.text + ' (epic)' }))

export const todosSaga = todos.map(todo => ({ ...todo, text: todo.text + ' (saga)' }))

export const todosThunk = todos.map(todo => ({ ...todo, text: todo.text + ' (thunk)' }))
