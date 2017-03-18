
import {
  NAVIGATE_TO,
  ME_FROM_TOKEN,
  ME_REQUEST_FAILED,
  ME_REQUEST_SUCCESS,
  SET_LOGGED_IN_STATUS,
} from './constants';


export function navigateTo(url) {
  return {
    type: NAVIGATE_TO,
    url,
  };
}

export function meFromToken(token) {
  return {
    type: ME_FROM_TOKEN,
    token,
  };
}

export function setLoggedInStatus(status) {
  return {
    type: SET_LOGGED_IN_STATUS,
    status,
  };
}

export function meRequestFailed(message) {
  return {
    type: ME_REQUEST_FAILED,
    message,
  };
}

export function meRequestSuccess(user) {
  return {
    type: ME_REQUEST_SUCCESS,
    user,
  };
}
