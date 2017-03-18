/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const NAVIGATE_TO = 'baiji/App/NAVIGATE_TO';
export const ME_FROM_TOKEN = 'baiji/App/ME_FROM_TOKEN';
export const ME_REQUEST_FAILED = 'baiji/App/ME_REQUEST_FAILED';
export const ME_REQUEST_SUCCESS = 'baiji/App/ME_REQUEST_SUCCESS';
export const SET_LOGGED_IN_STATUS = 'baiji/App/SET_LOGGED_IN_STATUS';
