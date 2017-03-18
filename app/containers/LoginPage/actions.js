/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_USERNAME,
  CHANGE_USERNAME_ERROR,
  CHANGE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SUBMIT_LOGIN_FORM,
} from './constants';

export function submitLoginForm({ username, password }) {
  return {
    type: SUBMIT_LOGIN_FORM,
    credentials: {
      username,
      password,
    },
  };
}

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changeUsernameError(err) {
  return {
    type: CHANGE_USERNAME_ERROR,
    error: err,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}
