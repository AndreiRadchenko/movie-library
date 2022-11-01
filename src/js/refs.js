const refs = {
  /* =============== references for modal-login ======================== */
  btnModalLoginClose: document.querySelector('[data-modal-login-close]'),
  modalLoginBackdrop: document.querySelector('.modal-login__backdrop'),
  modalLogin: document.querySelector('.modal-login'),

  btnSigninWithGoogle: document.querySelector('#btnSigninWithGoogle'),
  // btnLogout: document.querySelector('#btnLogout'),

  txtEmail: document.querySelector('#txtEmail'),
  txtPassword: document.querySelector('#txtPassword'),

  btnLogin: document.querySelector('#btnLogin'),
  btnSignup: document.querySelector('#btnSignup'),

  divLoginError: document.querySelector('#divLoginError'),
  lblLoginErrorMessage: document.querySelector('#lblLoginErrorMessage'),

  authUnsigned: document.querySelector('.auth__unsigned'),
  authSigned: document.querySelector('.auth__signed'),
  authLogin: document.querySelector('#auth__login'),
  authLogout: document.querySelector('#auth__logout'),
  authUserEmail: document.querySelector('.auth__user-email'),
  popup: document.querySelector('.popup'),
  popuptext: document.querySelector('.popuptext'),

  // ================= library header ===============================
  btnLibraryHome: document.querySelector('#btn-library-home'),

  /* =============== references for spinner ======================== */
  spinner: document.querySelector('.js-spinner'),
  loadSpinner: document.querySelector('[data-load-spinner]'),

  /* =========== ferences for button watched and queue ============= */

  wachedBtn: document.querySelector('.js-btn-watched'),
  queueBtn: document.querySelector('.js-btn-queue'),

  /* ========= ferences for button dark and light theme =========== */

  themeBtn: document.querySelector('#theme-switch-toggle'),

  filmGalleryLib: document.querySelector('.gallery-library'),
  body: document.querySelector('body'),


  /* =============== references for paginatio and archont button ======================== */
  paginationBox: document.querySelector('.pagianation'),
  anchorBtn: document.querySelector('.anchorBtn'),
};

export default refs;
