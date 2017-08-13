import { connect } from 'react-redux'

import { MIDDLEWARE, TODO } from '../config/constants'
import MiddlewareOptions from '../components/MiddlewareOptions'
import { todos } from '../data'
import { todoGetThunk } from '../reducers/TodoThunk'

const getTodos = (dispatch, middleware) => {
  switch (middleware) {
    case MIDDLEWARE.NONE:
      dispatch({ type: TODO.GET_COMPLETE, todos })
      break;
    case MIDDLEWARE.OBSERVABLE:
      dispatch({ type: TODO.GET_TODO_OBSERVABLE })
      break;
    case MIDDLEWARE.SAGA:
      dispatch({ type: TODO.GET_TODO_SAGA })
      break;
    case MIDDLEWARE.THUNK:
      dispatch(todoGetThunk())
      break;
    default:
      break;
  }
  dispatch({ type: TODO.UPDATE_MIDDLEWARE, middleware })
}

const mapStateToProps = (state, ownProps) => ({
  middleware: state.todo.middleware || MIDDLEWARE.NONE,
  middlewareList: MIDDLEWARE
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateMiddleware(middleware) {
    getTodos(dispatch, middleware)
  }
})

const MiddlewareSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddlewareOptions)

export default MiddlewareSelector
