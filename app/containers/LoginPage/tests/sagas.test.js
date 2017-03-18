/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';
import { loginSuccess, loginFailed } from '../actions';
import { submitLoginForm } from '../sagas';

describe('submitLoginForm Saga', () => {
  let submitLoginFormGenerator;

  beforeEach(() => {
    submitLoginFormGenerator = submitLoginForm();
    const testCall = submitLoginFormGenerator.next().value;

    expect(testCall).toMatchSnapshot();
  });

  it('should dispatch the loginSuccess action it request returns successfully', () => {
    const fixture = {
      firstName: 'firstName',
      lastName: 'lastName',
    };
    const callDescriptor = submitLoginFormGenerator.next(fixture).value;

    expect(callDescriptor).toEqual(put(loginSuccess(fixture)));
  });

  it('should dispatch the loginFailed action it request returns unsuccessfully', () => {
    const fixture = 'Error';
    const callDescriptor = submitLoginFormGenerator.throw(fixture).value;

    expect(callDescriptor).toEqual(put(loginFailed(fixture)));
  });
});
