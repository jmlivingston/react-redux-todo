import uuid from 'uuid'

const todos = [{
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

export default todos
