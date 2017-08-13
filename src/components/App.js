import React from 'react'

import Footer from './Footer'
import TodoAdd from '../containers/TodoAdd'
import VisibleTodoList from '../containers/VisibleTodoList'
import MiddlewareSelector from '../containers/MiddlewareSelector'

const App = () => <div className='container mt-3'>
  <h1>Todos</h1>
  <TodoAdd />
  <VisibleTodoList />
  <Footer />
  <hr />
  <MiddlewareSelector />
</div>


export default App
