import actionTypes from  "./action-types";

import { firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"

export const fetchCollectionsStart = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailed = errorMessage => ({
  type: actionTypes.FETCH_COLLECTIONS_FAILED,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {

  return dispatch => {

    const collectionsRef = firestore.collection("collections");

    dispatch(fetchCollectionsStart())

    collectionsRef.get().then(responce => {

      const collectionMap = convertCollectionsSnapshotToMap(responce);
      
      dispatch(fetchCollectionsSuccess(collectionMap));      

    }).catch(error => dispatch(fetchCollectionsFailed(error.message)));

  };

};