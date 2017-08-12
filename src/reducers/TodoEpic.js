import 'rxjs/add/observable/of'
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable'

import { TODO } from '../config/constants'
import { todosEpic } from './../data'

export const todoGetEpic = action$ => action$
  .ofType(TODO.GET_OBSERVABLE)
  .switchMap(() =>
    Observable.of({
      type: TODO.GET_COMPLETE,
      todos: todosEpic
    })
  )
