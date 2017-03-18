import { fromJS } from 'immutable';
import makeSelectLoginPage, {
  makeSelectCredentials,
 makeSelectUsername,
 makeSelectPassword,
} from '../selectors';

const selector = makeSelectLoginPage();

describe('selectLoginPageDomain', () => {
  it('should select the login state', () => {
    const loginState = fromJS({
      credentials: {},
    });
    const mockedState = fromJS({
      login: loginState,
    });

    expect(selector(mockedState)).toEqual(loginState);
  });
});


describe('makeSelectCredentials', () => {
  const usernameSelector = makeSelectCredentials();

  it('should select the credentials', () => {
    const credentials = fromJS({});
    const mockedState = fromJS({
      login: {
        credentials,
      },
    });

    expect(usernameSelector(mockedState)).toEqual(credentials);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectUsername();

  it('should select the username', () => {
    const username = 'test';
    const mockedState = fromJS({
      login: {
        credentials: {
          username,
        },
      },
    });

    expect(usernameSelector(mockedState)).toEqual(username);
  });
});

describe('makeSelectPassword', () => {
  const passwordSelector = makeSelectPassword();

  it('should select the password', () => {
    const password = 'pass';
    const mockedState = fromJS({
      login: {
        credentials: {
          password,
        },
      },
    });

    expect(passwordSelector(mockedState)).toEqual(password);
  });
});
