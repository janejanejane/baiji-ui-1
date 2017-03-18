import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => (state) => state.get('login');

/**
 * Other specific selectors
 */

const makeSelectCredentials = () => createSelector(
  selectLoginPageDomain(),
  (loginState) => loginState.get('credentials')
);

const makeSelectUsername = () => createSelector(
  makeSelectCredentials(),
  (credentials) => credentials.get('username')
);

const makeSelectPassword = () => createSelector(
  makeSelectCredentials(),
  (credentials) => credentials.get('password')
);

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain(),
  (substate) => substate
);

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectCredentials,
  makeSelectUsername,
  makeSelectPassword,
};
