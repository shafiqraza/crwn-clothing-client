import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBI_7Fdr6E6e-TFLfMDoP8Y8Lg-fCkWe-Y",
  authDomain: "crwn-db-9fb89.firebaseapp.com",
  projectId: "crwn-db-9fb89",
  storageBucket: "crwn-db-9fb89.appspot.com",
  messagingSenderId: "792992449805",
  appId: "1:792992449805:web:196f2264d5fab15800dc44"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export const createUserProfileDocument = async (userData, otherData) => {
  if(!userData) return;

  const userRef = await firestore.doc(`users/${userData.uid}`);

  const snapshot = await userRef.get();
  
  if(!snapshot.exists) {
    const {displayName, email, uid} = userData;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        uid,
        createdAt,
        ...otherData
      }); 
    } catch (err) {
      console.log("Error while adding user to firestore");
      console.log(err);      
    }
  };

  return userRef;
}

export const createCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = snapshot => {
  const transformedCollections = snapshot.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollections.reduce((acc, currentValue) => {
    acc[currentValue.title.toLowerCase()] = currentValue;
    return acc;
  }, {});
}

export const getCurrentUser = () =>  {
  return new Promise((resolve, reject )=> {
    const unsubscibe = auth.onAuthStateChanged(user => {
      unsubscibe();
      resolve(user);
    }, reject);
  });
}

export default firebase;