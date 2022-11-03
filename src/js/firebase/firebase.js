import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {
  hideLoginError,
  showLoginState,
  showLoginError,
  closeModalLogin,
} from '../modal-login';

import { updateUserRepresentation } from '../index/authenticate';
import refs from '../refs';
import { spinnerPlay, spinnerStop } from '../modal-spinner';

const firebaseConfig = {
  apiKey: 'AIzaSyCRslPMi34g_BP9ji5GIJxC7E7VO81FLJA',
  authDomain: 'filmoteka-5c6fe.firebaseapp.com',
  projectId: 'filmoteka-5c6fe',
  storageBucket: 'filmoteka-5c6fe.appspot.com',
  messagingSenderId: '108908661446',
  appId: '1:108908661446:web:5bebb42848e31c240c65c7',
  measurementId: 'G-T4XR0TZ24K',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then(result => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('currentUser', email);
      closeModalLogin();
      location.reload();
    })
    .catch(error => {
      console.log(error);
    });
}

// Create new account using email/password
export async function createAccount() {
  spinnerPlay();
  const email = refs.txtEmail.value;
  const password = refs.txtPassword.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    closeModalLogin();
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  } finally {
    spinnerStop();
  }
}

// Login using email/password
export async function loginEmailPassword() {
  spinnerPlay();
  const loginEmail = refs.txtEmail.value;
  const loginPassword = refs.txtPassword.value;
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    closeModalLogin();
    location.reload();
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  } finally {
    spinnerStop();
  }
}

// Monitor auth state
export async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      showLoginState(user);
      localStorage.setItem('currentUser', user.email);

      hideLoginError();
      updateUserRepresentation();
    } else {
      localStorage.removeItem('currentUser');
      updateUserRepresentation();
    }
  });
}

// Log out
export async function logout() {
  await signOut(auth);
  location.reload();
}

monitorAuthState();
