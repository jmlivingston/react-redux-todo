import React, { Component } from 'react'

import Footer from './Footer'
import { MIDDLEWARE } from '../config/constants'
import TodoAdd from '../containers/TodoAdd'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  state = {
    middleware: MIDDLEWARE.OBSERVABLE,
    middlewareList: MIDDLEWARE
  }
  changeMiddleWare = e => {
    this.setState({
      middleware: e.target.value
    })
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
          Object.keys(this.state.middlewareList).map(middlewareKey => {
            const middlewareValue = this.state.middlewareList[middlewareKey]
            return <label key={middlewareKey} className="custom-control custom-radio">
              <input name='middleware' type='radio' className="custom-control-input"
                value={middlewareValue} 
                onChange={this.changeMiddleWare} 
                checked={this.state.middleware === middlewareValue} />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">{middlewareValue}</span>
            </label>
          })
        }
      </div>
    </div>
  }
}

export default App
