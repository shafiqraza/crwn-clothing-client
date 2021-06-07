import { takeLatest, call, put, all } from "redux-saga/effects";

import userActionTypes from "../user/userActionTypes";

import { clearCart } from "./cart-action";


export function* clearCartOnSignOutSuccess() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess);
}

export default function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
}