import todos from './dummyData'
import { TODO } from '../config/constants'

export const todoGetThunk = () => {
  return new Promise((resolve, reject) => {
    resolve(todos)
  })
}
