import refs from './refs';

{
  /* <button id="btnLogout" type="button" class="modal-login__button">
  login
</button>; */
}

const openModalLogin = () => {
  refs.modalLoginBackdrop.classList.remove('is-hidden');
  document.addEventListener('keydown', onModalLoginKeydown);
};

const closeModalLogin = () => {
  refs.modalLoginBackdrop.classList.add('is-hidden');
  document.removeEventListener('keydown', onModalLoginKeydown);
};

//
// function onBtnLogoutClick(event) {
//   openModalLogin();
// }

function onModalLoginClose(event) {
  closeModalLogin();
}

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

refs.btnModalLoginClose.addEventListener('click', onModalLoginClose);
refs.modalLoginBackdrop.addEventListener('click', onModalLoginBackdropClick);
// refs.btnLogout.addEventListener('click', onBtnLogoutClick);
