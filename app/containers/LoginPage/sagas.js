import { take, takeLatest, call, put, select } from 'redux-saga/effects';

import request from 'utils/request';
import {
  changeUsername,
  changeUsernameError,
  loginSuccess,
  loginFailed,
} from './actions';
import {
  SUBMIT_LOGIN_FORM,
} from './constants';
import {
  makeSelectUsername,
  makeSelectPassword,
} from './selectors';

// Individual exports for testing
export function* getUsername() {
  const url = 'http://localhost:3000/username';

  try {
    const username = yield call(request, url);
    yield put(changeUsername(username));
  } catch (err) {
    yield put(changeUsernameError(err));
  }
}

export function* submitLoginForm() {
  const username = select(makeSelectUsername()); // get from selector
  const password = select(makeSelectPassword()); // get from selector
  const url = '/login';

  try {
    const loginData = yield call(request, url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username,
        password,
      },
    });
    yield put(loginSuccess(loginData));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

export function* submitLoginTriggered() {
  yield takeLatest(SUBMIT_LOGIN_FORM, submitLoginForm);
}

// All sagas to be loaded
export default [
  submitLoginTriggered,
];
