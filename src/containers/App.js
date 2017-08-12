import React, { Component } from 'react'

import { MIDDLEWARE, TODO } from '../config/constants'
import { todoGetThunk } from '../reducers/TodoThunk'
import { todos } from '../data'
import Footer from '../components/Footer'
import store from '../config/store'
import TodoAdd from './TodoAdd'
import VisibleTodoList from './VisibleTodoList'

class App extends Component {
  state = {
    middleware: MIDDLEWARE.NONE,
    middlewareList: MIDDLEWARE
  }

  componentWillMount () {
    this.updateMiddleware(this.state.middleware)
  }

  updateMiddleware (middleware) {
    switch (middleware) {
      case MIDDLEWARE.NONE:
        store.dispatch({ type: TODO.GET_COMPLETE, todos })
        break;
      case MIDDLEWARE.OBSERVABLE:
        store.dispatch({ type: TODO.GET_OBSERVABLE })
        break;
      case MIDDLEWARE.SAGA:
        store.dispatch({ type: TODO.GET_SAGA })
        break;
      case MIDDLEWARE.THUNK:
        store.dispatch(todoGetThunk())
        break;
      default:
        return null
    }
  }

  changeMiddleWare = e => {
    this.setState({
      middleware: e.target.value
    })
    this.updateMiddleware(e.target.value)
  }

  render () {
    return <div className='container mt-3'>
      <h1>Todos</h1>
      <TodoAdd />
      <VisibleTodoList middleware={this.state.middleware} />
      <Footer />
      <hr />
      <h4>Middleware Option</h4>
      <div className="custom-controls-stacked">
        {
          Object.keys(this.state.middlewareList).map(prop => {
            const value = this.state.middlewareList[prop]
            return <label key={prop} className="custom-control custom-radio">
              <input name='middleware' type='radio' className="custom-control-input"
                value={value}
                onChange={this.changeMiddleWare}
                checked={this.state.middleware === value} />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">{value}</span>
            </label>
          })
        }
      </div>
    </div>
  }
}

export default App
