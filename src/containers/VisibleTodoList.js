import { connect } from 'react-redux'

import { FILTER, MIDDLEWARE } from '../config/constants'
import { todoGetThunk } from '../reducers/TodoThunk'
import { todoToggle } from '../config/actions'
import TodoList from '../components/TodoList'
import { TODO } from '../config/constants'

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

const mapDispatchToProps = (dispatch, ownProps) => ({
  get () {
    switch (ownProps.middleware) {
      case MIDDLEWARE.OBSERVABLE:
        dispatch({ type: TODO.GET_OBSERVABLE })
        break;
      case MIDDLEWARE.SAGA:
        dispatch({ type: TODO.GET_SAGA })
        break;
      case MIDDLEWARE.THUNK:
        todoGetThunk().then(todos => {
          dispatch({ type: TODO.GET_COMPLETE, todos })
        })        
        break;
      default:
        return null
    }

  },
  onTodoClick (id) {
    dispatch(todoToggle(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
