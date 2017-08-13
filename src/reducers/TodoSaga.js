import { put, takeEvery } from 'redux-saga/effects'

import { TODO } from '../config/constants'
import { todosSaga } from './../data'

function* todoGetSaga () {
  yield put({ type: TODO.GET_COMPLETE, todos: todosSaga })
}

export function* todoSaga() {
  yield takeEvery(TODO.GET_TODO_SAGA, todoGetSaga);
}
