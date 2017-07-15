import { connect } from 'react-redux'

import { todoAdd, todoChange } from '../actions'
import TodoAddForm from '../components/TodoAddForm'

const mapStateToProps = state => ({
  todoAddValue: state.todo.todoAddValue,
  error: state.todo.error
})

const mapDispatchToProps = dispatch => ({
  todoChange: value => {
    dispatch(todoChange(value))
  },
  todoSubmit: () => {
    dispatch(todoAdd())
  }
})

const TodoAdd = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAddForm)

export default TodoAdd
