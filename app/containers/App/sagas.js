import { call, put, takeLatest } from 'redux-saga/effects';

import {
  ME_FROM_TOKEN,
} from './constants';

import {
  meRequestFailed,
  meRequestSuccess,
} from './actions';

export function* getMeFromToken(action) {
  // TODO: placeholder for request
  const request = { fetch: () => true };
  try {
    const me = yield call(request.fetch, action.username);
    yield put(meRequestSuccess(me));
  } catch (err) {
    yield put(meRequestFailed(err.message));
  }
}

function* meData() {
  yield takeLatest(ME_FROM_TOKEN, getMeFromToken);
}

export default [
  meData,
];
