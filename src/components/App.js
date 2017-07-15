import React from 'react'

import { todoTypes } from '../types'
import Footer from './Footer'
import store from '../stores'
import TodoAdd from '../containers/TodoAdd'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className='container mt-3'>
    <TodoAdd />
    <VisibleTodoList />
    <Footer />
  </div>
)

store.dispatch({ type: todoTypes.TODO_GET })

export default App
