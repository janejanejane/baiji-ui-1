import { fromJS } from 'immutable';

import appReducer from '../reducer';

import {
  setLoggedInStatus,
  meRequestSuccess,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isLoggedIn: false,
      me: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should set the login status', () => {
    const expectedResult = fromJS({
      isLoggedIn: true,
      me: null,
    });
    expect(appReducer(state, setLoggedInStatus(true))).toEqual(expectedResult);
  });

  it('should set the me value on success', () => {
    const fixture = { username: 'julius' };
    const expectedResult = state.set('me', fixture).set('isLoggedIn', true);
    expect(appReducer(state, meRequestSuccess(fixture))).toEqual(expectedResult);
  });
});
