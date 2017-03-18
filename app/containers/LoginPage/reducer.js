/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from './constants';

const initialState = fromJS({
  credentials: {
    username: '',
    password: '',
  },
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.setIn(['credentials', 'username'], action.username);
    case CHANGE_PASSWORD:
      return state.setIn(['credentials', 'password'], action.password);
    default:
      return state;
  }
}

export default loginPageReducer;
