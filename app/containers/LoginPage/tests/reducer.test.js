
import { fromJS } from 'immutable';
import loginPageReducer from '../reducer';
import {
  changeUsername,
  changePassword,
} from '../actions';

describe('loginPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      credentials: {
        username: '',
        password: '',
      },
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;

    expect(loginPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'test';
    const expectedResult = state.setIn(['credentials', 'username'], fixture);

    expect(loginPageReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });

  it('should handle the changePassword action correctly', () => {
    const fixture = 'test';
    const expectedResult = state.setIn(['credentials', 'password'], fixture);

    expect(loginPageReducer(state, changePassword(fixture))).toEqual(expectedResult);
  });
});
