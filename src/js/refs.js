const refs = {
  /* =============== references for modal-login ======================== */
  btnModalLoginClose: document.querySelector('[data-modal-login-close]'),
  modalLoginBackdrop: document.querySelector('.modal-login__backdrop'),
  modalLogin: document.querySelector('.modal-login'),

  btnSigninWithGoogle: document.querySelector('#btnSigninWithGoogle'),
  btnLogout: document.querySelector('#btnLogout'),

  // representUserName: document.querySelector('#representUserName'),
  // representUserEmail: document.querySelector('#representUserEmail'),
  // representUserPic: document.querySelector('#representUserPic'),

  txtEmail: document.querySelector('#txtEmail'),
  txtPassword: document.querySelector('#txtPassword'),

  btnLogin: document.querySelector('#btnLogin'),
  btnSignup: document.querySelector('#btnSignup'),

  // divAuthState: document.querySelector('#divAuthState'),
  // lblAuthState: document.querySelector('#lblAuthState'),

  divLoginError: document.querySelector('#divLoginError'),
  lblLoginErrorMessage: document.querySelector('#lblLoginErrorMessage'),

  authUnsigned: document.querySelector('.auth__unsigned'),
  authSigned: document.querySelector('.auth__signed'),
  authLogin: document.querySelector('#auth__login'),
  authLogout: document.querySelector('#auth__logout'),
  authUserEmail: document.querySelector('.auth__user-email'),
  popup: document.querySelector('.popup'),
  popuptext: document.querySelector('.popuptext'),

  /* =============== references for  ======================== */
};

export default refs;
