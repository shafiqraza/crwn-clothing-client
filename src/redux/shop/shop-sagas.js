import { call, put, takeEvery, all } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import actionTypes from "./action-types";

import { fetchCollectionsSuccess, fetchCollectionsFailed } from "./shop-actions";

function* fetchCollectionsAsync() {
  try {
  
    const collectionsRef = firestore.collection("collections");  
    
    const snapshot = yield collectionsRef.get();
    
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    
    yield put(fetchCollectionsSuccess(collectionMap));
  
  }catch(e) {
  
    yield put(fetchCollectionsFailed(e.message));
  
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(actionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export default function* shopSagas () {
  yield all([
    call(fetchCollectionStart)
  ])
}