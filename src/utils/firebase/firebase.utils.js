import { initializeApp } from 'firebase/app';
/**
 * @import for Authentication
 */
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

/**
 * @import for Firestore Databse
 */
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3SKTY3hUHnFSCbei6vfI2XroKEJa7F-o',
  authDomain: 'fabled-alchemy-365604.firebaseapp.com',
  projectId: 'fabled-alchemy-365604',
  storageBucket: 'fabled-alchemy-365604.appspot.com',
  messagingSenderId: '659332178115',
  appId: '1:659332178115:web:3bbd7acfcbe1c17a9d8276',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});
// all uper three lines is basically tools for authentication

/**
 * @return i'm not sure but i think its access token provided by google so google can verify it when firebase make request to it or whatever it means authenticate data
 */
export const auth = getAuth();

/**
 * @returns popup new window for google login
 */
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/**
 * @return firestore Database
 */
export const DB = getFirestore();

/**
 *
 * @param {Data credential} userAuth : as we login through google we get some data that data is userAuth.
 *  - checkout the userauth object so it will be easy for destructuring
 *  - UserAuth is basically provided by this 'signInWithPopup(auth, provider)'
 *
 * @param {database googgle authentication} userDecRef : give me the 'db' inside of 'users' collection with this 'userAuth.uid'
 * @param {getting data from firestore databse} userSnapshot
 * @param {date} createdAt  so we know that when it was created
 * @other - {checking the availibility for data} userSnapshot.exists()
 *  - if not exists then create it
 * @action
 * - if : databse is not exists then create it
 * - else : databse exists just return 'userDocRef'
 * @additionalInformation {object} we don't have display name every time bcz we are authenticating through email and password
 * that's why we use it
 * - what it will do => display : '' , it will set display to e,pty instedad of null
 *
 */

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  //'users' -> collection name which will store in database
  const userDocRef = doc(DB, 'users', userAuth.uid);
  // console.log("usedocref", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log('usersnapshot', userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    /**  so we know that when it was created */
    const createdAt = new Date();

    try {
      /** -  setting data into 'userDocref' */
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(
        'error occured while creating databse(from firebase.utils)',
        error
      );
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = async (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};

/**
 * {
 * next : callback,
 * error : errorCallback,
 * complete : completeCallback
 * }
 */
