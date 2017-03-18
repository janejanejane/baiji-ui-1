import { put } from 'redux-saga/effects';

import {
  meRequestSuccess,
  meRequestFailed,
} from '../actions';

import {
  getMeFromToken,
} from '../sagas';

describe('Request Me From Token Saga', () => {
  let getMeFromTokenGenerator;

  beforeEach(() => {
    getMeFromTokenGenerator = getMeFromToken({
      token: 'exampletoken',
    });
    const testCall = getMeFromTokenGenerator.next().value;

    expect(testCall).toMatchSnapshot();
  });

  it('should dispatch meRequestSuccess on success', () => {
    const fixture = {
      username: 'testusername',
    };

    const callDescriptor = getMeFromTokenGenerator.next(fixture).value;
    expect(callDescriptor).toEqual(put(meRequestSuccess(fixture)));
  });

  it('should dispatch meRequestFailed on failure', () => {
    const fixture = {
      message: 'message',
    };

    const callDescriptor = getMeFromTokenGenerator.throw(fixture).value;
    expect(callDescriptor).toEqual(put(meRequestFailed(fixture.message)));
  });
});
