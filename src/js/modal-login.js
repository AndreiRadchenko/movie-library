import { AuthErrorCodes } from 'firebase/auth';
import refs from './refs';
import {
  signInWithGoogle,
  loginEmailPassword,
  createAccount,
} from '../js/firebase/firebase';

export const openModalLogin = () => {
  refs.modalLoginBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalLoginKeydown);
};

export const closeModalLogin = () => {
  refs.modalLoginBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalLoginKeydown);
};

const onModalLoginClose = event => {
  closeModalLogin();
};

const onModalLoginBackdropClick = event => {
  if (event.target === refs.modalLoginBackdrop) {
    closeModalLogin();
  }
};

const onModalLoginKeydown = event => {
  if (event.code === 'Escape') {
    closeModalLogin();
  }
};

export const hideLoginError = () => {
  refs.divLoginError.style.display = 'none';
  refs.lblLoginErrorMessage.innerHTML = '';
};

export const showLoginError = error => {
  refs.divLoginError.style.display = 'block';
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    refs.lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
  } else {
    refs.lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
  }
};

export const showLoginState = user => {
  // refs.lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
};

refs.btnModalLoginClose.addEventListener('click', onModalLoginClose);
refs.modalLoginBackdrop.addEventListener('click', onModalLoginBackdropClick);
refs.btnSigninWithGoogle.addEventListener('click', signInWithGoogle);
refs.btnLogin.addEventListener('click', loginEmailPassword);
refs.btnSignup.addEventListener('click', createAccount);

// refs.btnLogout.addEventListener('click', onBtnLogoutClick);
