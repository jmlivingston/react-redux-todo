import 'rxjs/add/observable/of'
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable'
import uuid from 'uuid'

import { todoTypes } from '../types'

const todoEpic = action$ => action$
  .ofType(todoTypes.GET)
  .switchMap(() =>
    Observable.of({
        type: todoTypes.GET_COMPLETE,
        todos: [{
            id: uuid(),
            text: 'Wash dishes',
            completed: true
        }, {
            id: uuid(),
            text: 'Feed the cat',
            completed: false
        }, {
            id: uuid(),
            text: 'Walk the dog',
            completed: true
        }, {
            id: uuid(),
            text: 'Run the lake',
            completed: false
        }]
    })
  )

export default todoEpic
