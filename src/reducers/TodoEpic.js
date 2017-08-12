import 'rxjs/add/observable/of'
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable'

import todos from './dummyData'
import { TODO } from '../config/constants'

const todoEpic = action$ => action$
  .ofType(TODO.GET_OBSERVABLE)
  .switchMap(() =>
    Observable.of({
        type: TODO.GET_COMPLETE,
        todos
    })
  )

export default todoEpic
