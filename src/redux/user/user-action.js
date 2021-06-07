import userActionTypes from "./userActionTypes";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (credietials) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: credietials
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailed = errorMessage => ({
  type: userActionTypes.SIGN_IN_FAILED,
  payload: errorMessage
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});


export const signUpStart = credietials => ({
  type: userActionTypes.SIGN_UP_START,
  payload: credietials
});

export const signUpSuccess = user => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user
});

export const signUpFailed = errorMessage => ({
  type: userActionTypes.SIGN_UP_FAILED,
  payload: errorMessage
})

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailed = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILED,
  payload: error
});