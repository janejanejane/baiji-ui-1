import React from 'react';
import { shallow, mount } from 'enzyme';

import { App } from '../index';

describe('<App />', () => {
  beforeEach(() => {
    global.sessionStorage = jest.fn();
    global.sessionStorage.getItem = jest.fn();
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should call get token on refresh', () => {
    const tokenRefresh = jest.fn();
    global.sessionStorage.getItem.mockReturnValue('tokenString');
    mount((
      <App loadUserFromToken={tokenRefresh} />
    ));

    expect(tokenRefresh).toHaveBeenCalled();
  });

  it('should not call remote token load on empty session', () => {
    const tokenRefresh = jest.fn();
    const setLoggedInStatus = jest.fn();
    global.sessionStorage.getItem.mockReturnValue(null);
    mount((
      <App loadUserFromToken={tokenRefresh} dispatchSetLoggedInStatus={setLoggedInStatus} />
    ));
    expect(tokenRefresh).toHaveBeenCalledTimes(0);
  });

  it('should dispatch change loggedIn status', () => {
    const setLoggedInStatus = jest.fn();
    const tokenRefresh = jest.fn();
    global.sessionStorage.getItem.mockReturnValue(null);
    mount((
      <App dispatchSetLoggedInStatus={setLoggedInStatus} loadUserFromToken={tokenRefresh} />
    ));

    expect(setLoggedInStatus).toHaveBeenCalledWith(false);
  });

  it('should dispatch load user action on token found', () => {
    const fixture = 'token';
    const setLoggedInStatus = jest.fn();
    const tokenRefresh = jest.fn();
    global.sessionStorage.getItem.mockReturnValue(fixture);
    mount((
      <App dispatchSetLoggedInStatus={setLoggedInStatus} loadUserFromToken={tokenRefresh} />
    ));
    expect(setLoggedInStatus).toHaveBeenCalledTimes(0);
    expect(tokenRefresh).toHaveBeenCalledWith(fixture);
  });
});
