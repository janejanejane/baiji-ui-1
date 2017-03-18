import { fromJS } from 'immutable';

import {
  SET_LOGGED_IN_STATUS,
  ME_REQUEST_SUCCESS,
} from './constants';

const initialState = fromJS({
  isLoggedIn: false,
  me: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED_IN_STATUS:
      return state.set('isLoggedIn', action.status);
    case ME_REQUEST_SUCCESS:
      return state.set('me', action.user)
        .set('isLoggedIn', true);
    default:
      return state;
  }
}

export default appReducer;
