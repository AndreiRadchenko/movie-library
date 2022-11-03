import refs from '../refs';
import { refreshLibrary } from '../modal-detail-lib';

refs.wachedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  refs.wachedBtn.classList.add('library__btn--currenly');
  refs.queueBtn.classList.remove('library__btn--currenly');
  refreshLibrary();
}

function onQueueBtnClick() {
  refs.wachedBtn.classList.remove('library__btn--currenly');
  refs.queueBtn.classList.add('library__btn--currenly');
  refreshLibrary();
}


// ========================= Change Theme================
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('#theme-switch-toggle');

// дефолтная тема
function defaultTheme() {
  const defaultTheme = localStorage['Theme'];

  if (defaultTheme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true;
  }
}
defaultTheme();

//смена темы со светлой на тёмную

bodyRef.addEventListener('change', onThemeChenge);

function onThemeChenge(event) {
  if (event.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);

    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);

    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
