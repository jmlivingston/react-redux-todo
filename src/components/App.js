import React from 'react'

import { todoTypes } from '../types'
import Footer from './Footer'
import store from '../stores'
import TodoAdd from '../containers/TodoAdd'
import VisibleTodoList from '../containers/VisibleTodoList'

import Link from '../components/Link'

const App = () => (
  <div className='container mt-3'>
    <TodoAdd />
    <VisibleTodoList />
    <Footer />
    <Link active={ false } onClick={ console.log }>
      test
    </Link>
  </div>
)

store.dispatch({ type: todoTypes.GET })

export default App
