import refs from '../refs';
import { openModalLogin } from '../modal-login';
import { monitorAuthState, logout } from '../firebase/firebase';

refs.popup.addEventListener('click', togglePopup);
refs.authLogin.addEventListener('click', onAuthLoginClick);
refs.authLogout.addEventListener('click', onAuthLogoutClick);

function togglePopup() {
  refs.popuptext.classList.toggle('show');
  if (refs.popuptext.classList.contains('show')) {
    document.addEventListener('keydown', onPopupKeydown);
    document.body.addEventListener('click', onBodyClick);
  }
}

function onPopupKeydown(event) {
  if (event.code === 'Escape') {
    refs.popuptext.classList.remove('show');
    document.removeEventListener('keydown', onPopupKeydown);
  }
}

function onBodyClick(event) {
  if (!event.target.classList.contains('auth__text')) {
    refs.popuptext.classList.remove('show');
    document.body.removeEventListener('click', onBodyClick);
  }
}

function onAuthLoginClick(event) {
  openModalLogin();
}

function onAuthLogoutClick(event) {
  logout();
}

export function updateUserRepresentation() {
  const userEmail = localStorage.getItem('currentUser');
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
