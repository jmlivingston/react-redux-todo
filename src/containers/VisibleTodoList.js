import { connect } from 'react-redux'

import { getVisibleTodos } from '../selectors'
import { todoToggle } from '../config/actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
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
