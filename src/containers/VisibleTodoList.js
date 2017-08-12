import { connect } from 'react-redux'

import { FILTER } from '../config/constants'
import { todoToggle } from '../config/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
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

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todo.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onTodoClick (id) {
    dispatch(todoToggle(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
