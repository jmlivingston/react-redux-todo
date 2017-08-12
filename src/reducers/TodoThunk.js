import { TODO } from '../config/constants'
import { todosThunk } from './../data'

let getTodos = () => new Promise((resolve, reject) => {
  resolve(todosThunk)
})

export const todoGetThunk = () => dispatch =>
  getTodos().then(todos =>
    dispatch({ type: TODO.GET_COMPLETE, todos })
  )

