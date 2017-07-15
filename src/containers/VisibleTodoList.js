import { connect } from 'react-redux'

import { filterTypes } from '../types'
import { todoToggle } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterTypes.SHOW_ALL:
      return todos
    case filterTypes.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case filterTypes.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todo.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(todoToggle(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
