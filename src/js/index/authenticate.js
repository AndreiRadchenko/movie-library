import refs from '../refs';
import { openModalLogin } from '../modal-login';
import { monitorAuthState, logout } from '../firebase/firebase';

refs.popup.addEventListener('click', togglePopup);
refs.authLogin.addEventListener('click', onAuthLoginClick);
refs.authLogout.addEventListener('click', onAuthLogoutClick);

function togglePopup() {
  refs.popuptext.classList.toggle('show');
}

function onAuthLoginClick(event) {
  openModalLogin();
}

function onAuthLogoutClick(event) {
  // console.log('logout');
  logout();
}

export function updateUserRepresentation() {
  const userEmail = localStorage.getItem('currentUser');
  // console.log('userEmail: ', userEmail);
  if (!userEmail) {
    refs.authUserEmail.textContent = 'you are not loged in';
    refs.authUnsigned.classList.remove('visually-hidden');
    refs.authSigned.classList.add('visually-hidden');
  } else {
    refs.authUserEmail.textContent = userEmail;
    refs.authUnsigned.classList.add('visually-hidden');
    refs.authSigned.classList.remove('visually-hidden');
  }
}

// monitorAuthState();
