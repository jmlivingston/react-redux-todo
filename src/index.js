import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import { render } from 'react-dom'
import React from 'react'

import './index.css'
import App from './components/App'
import store from './stores'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
