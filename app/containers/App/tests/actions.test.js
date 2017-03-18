
import {
  ME_FROM_TOKEN,
  NAVIGATE_TO,
  ME_REQUEST_FAILED,
  ME_REQUEST_SUCCESS,
} from '../constants';

import {
  meFromToken,
  navigateTo,
  meRequestFailed,
  meRequestSuccess,
} from '../actions';

describe('App Actions', () => {
  describe('meFromToken', () => {
    it('should return the correct type and the token', () => {
      const fixture = 'tokenmesample';
      const expectedResult = {
        type: ME_FROM_TOKEN,
        token: fixture,
      };

      expect(meFromToken(fixture)).toEqual(expectedResult);
    });
  });

  describe('navigateTo', () => {
    it('should return the correct type and the url', () => {
      const fixture = '/host';
      const expectedResult = {
        type: NAVIGATE_TO,
        url: fixture,
      };

      expect(navigateTo(fixture)).toEqual(expectedResult);
    });
  });

  describe('meRequestFailed', () => {
    it('should return the correct type and the message', () => {
      const fixture = 'message';
      const expectedResult = {
        type: ME_REQUEST_FAILED,
        message: fixture,
      };

      expect(meRequestFailed(fixture)).toEqual(expectedResult);
    });
  });

  describe('meRequestFailed', () => {
    it('should return the correct type and the message', () => {
      const fixture = { username: 'username' };
      const expectedResult = {
        type: ME_REQUEST_SUCCESS,
        user: fixture,
      };

      expect(meRequestSuccess(fixture)).toEqual(expectedResult);
    });
  });
});
