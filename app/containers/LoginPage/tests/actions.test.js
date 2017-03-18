
import {
  changeUsername,
  changeUsernameError,
  changePassword,
  loginSuccess,
  loginFailed,
  submitLoginForm,
} from '../actions';
import {
  CHANGE_USERNAME,
  CHANGE_USERNAME_ERROR,
  CHANGE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SUBMIT_LOGIN_FORM,
} from '../constants';

describe('LoginPage actions', () => {
  describe('Submit Form Action', () => {
    it('has a type of SUBMIT_LOGIN_FORM and credentials object', () => {
      const username = 'test';
      const password = 'pass';
      const expected = {
        type: SUBMIT_LOGIN_FORM,
        credentials: {
          username,
          password,
        },
      };

      expect(submitLoginForm({ username, password })).toEqual(expected);
    });
  });

  describe('changeUsername', () => {
    it('should return the correct type and the passed username', () => {
      const fixture = 'test';
      const expectedResult = {
        type: CHANGE_USERNAME,
        username: fixture,
      };

      expect(changeUsername(fixture)).toEqual(expectedResult);
    });
  });

  describe('changeUsernameError', () => {
    it('should return the error type and the error message', () => {
      const fixture = 'Error!';
      const expectedResult = {
        type: CHANGE_USERNAME_ERROR,
        error: fixture,
      };

      expect(changeUsernameError(fixture)).toEqual(expectedResult);
    });
  });

  describe('changePassword', () => {
    it('should return the correct type and the passed password', () => {
      const fixture = 'pass';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password: fixture,
      };

      expect(changePassword(fixture)).toEqual(expectedResult);
    });
  });

  describe('loginSuccess', () => {
    it('should return the correct type and user details', () => {
      const fixture = {
        firstName: 'firstName',
        lastName: 'lastName',
      };
      const expectedResult = {
        type: LOGIN_SUCCESS,
        data: {
          firstName: 'firstName',
          lastName: 'lastName',
        },
      };

      expect(loginSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('loginFailed', () => {
    it('should return the correct type and error value', () => {
      const fixture = 'Error!';
      const expectedResult = {
        type: LOGIN_FAILED,
        error: 'Error!',
      };

      expect(loginFailed(fixture)).toEqual(expectedResult);
    });
  });
});
