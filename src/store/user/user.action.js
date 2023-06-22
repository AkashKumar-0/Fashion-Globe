import createAction from '../../utils/reducer/reducer.utils';

import { USER_ACTION_TYPE } from './user.types';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);

// {type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user}

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPE.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { email, password });

export const SignInSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

export const SignInFailed = (error) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => {
  createAction(USER_ACTION_TYPE.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};
export const signUpSuccess = (user, additionalDetails) => {
  createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails });
};
export const signUpFailed = (error) => {
  createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error);
};
// export const SignOutStart = (email, password) => {
//   createAction(USER_ACTION_TYPE.SIGN_OUT_START, { email, password });
// };
// export const SignOutSuccess = (user, additionalDetails) => {
//   createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS, { user, additionalDetails });
// };
// export const SignOutError = (error) => {
//   createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error);
// };
