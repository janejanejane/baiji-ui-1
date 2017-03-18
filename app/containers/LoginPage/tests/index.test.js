import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { submitLoginForm } from '../actions';
import { LoginPage, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<LoginPage />', () => {
  let renderedComponent = null;

  beforeAll(() => {
    renderedComponent = shallow(
      <LoginPage submitForm={() => {}} />
    );
  });

  it('Expect to display header message for intl', () => {
    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });

  it('Expect to display input for email', () => {
    expect(renderedComponent.find('input#inputEmail[type="email"]')).toHaveLength(1);
  });

  it('Expect to display input for password', () => {
    expect(renderedComponent.find('input#inputPassword[type="password"]')).toHaveLength(1);
  });

  it('Expect to display submit button', () => {
    expect(renderedComponent.find('button[type="submit"]')).toHaveLength(1);
  });

  describe('on form submit', () => {
    let dispatch = null;
    let result = null;

    beforeAll(() => {
      dispatch = jest.fn();
      result = mapDispatchToProps(dispatch);
    });

    it('should be injected', () => {
      expect(result.submitForm).toBeDefined();
    });

    it('should dispatch submitLoginForm with credentials of the user', () => {
      const credentials = {
        username: 'test',
        password: 'pass',
      };

      result.submitForm(credentials);

      expect(dispatch).toHaveBeenCalledWith(submitLoginForm(credentials));
    });
  });
});
