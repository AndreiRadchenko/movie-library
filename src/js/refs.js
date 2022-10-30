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

  /* =============== references for spinner ======================== */
  spinner: document.querySelector('.js-spinner'),
  loadSpinner: document.querySelector('[data-load-spinner]'),

  /* =============== references for modal-team ======================== */
  spinner: document.querySelector('.js-spinner'),

  /* =============== references for  ======================== */
  modalTeam: document.querySelector('#js-team-modal'),
  modalTeamGalery: document.querySelector('.team__list-js'),

  // wachedBtn: document.querySelector('.js-btn-watched')
  // queueBtn: document.querySelector('.js-btn-queue')
};

export default refs;
