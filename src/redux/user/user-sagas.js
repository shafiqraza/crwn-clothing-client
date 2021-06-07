import { call, put, all, takeLatest } from "redux-saga/effects";

import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed, signUpFailed, signUpSuccess } from "./user-action";

import userActionTypes from "./userActionTypes";

function* setUserSnapshot(user) {
  try{
    const userRef = yield call(createUserProfileDocument, user);

    const userSnapShot = yield userRef.get();

    const { displayName, email: userEmail, uid } = yield userSnapShot.data();

    yield put(signInSuccess({
      displayName,
      email: userEmail,
      id: uid
    }));
  }catch(e) {
    console.log(e.message);
    yield put(signInFailed(e.message));

  }
}

export function* googleSignIn() {
  try {
    
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield setUserSnapshot(user);

  } catch (error) {
    yield console.log(`ERROR WHILE GOOGLE SIGNIN - ${error.message}`);

    yield put(signInFailed(error.message));
  }

}

export function* emailSignIn(action) {
  try {
    const { payload: { email, password } } = yield action;
    
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield setUserSnapshot(user);

  } catch (error) {
    yield console.log(`ERROR WHILE EMAIL SIGNIN - ${error.message}`);
    yield put(signInFailed(error.message));
  }
  
}

export function* isUserAuthenticated() {
  try{

    const user = yield getCurrentUser();
    if(!user) return;
    yield setUserSnapshot(user);

  }catch(e) {
    yield put(signInFailed(e.message));
  }
}

export function* signUp(action) {
  try{
    const { payload: {email, password, displayName } } = yield  action;
  
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
  
    const authenticatedUser = yield {email: user.email, displayName, uid: user.uid}

    yield put(signUpSuccess(authenticatedUser));

    yield setUserSnapshot(authenticatedUser);
  
  }catch(error) {
    console.log("SIGN UP FAILED", error.message);
    yield put(signUpFailed(error.message));
  }

}

export function* signOut() {
  try{
    yield auth.signOut();

    yield put(signOutSuccess());

  }catch(error) {
    yield put(signOutFailed(error.message));
  }
}


/*
------------------------------------------
  Listening for actions calls
------------------------------------------
*/

export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}


export function* onEmailSignIn() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUp() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}


export default function* userSagas() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignUp),
    call(onSignOut)
  ]);
}