import refs from '../refs';
import { renderGalleryLib } from './gallery';
import cloudStorage from '../firebase/cloudstorage';
const { WATCHED, QUEUE, NOT_ADDED } = cloudStorage.tags;

refs.wachedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  cloudStorage
    .getUserCollections()
    .then(films => {
      const watchedFilms = films?.filter(film => film.tag === WATCHED);
      //   console.log(watchedFilms);

      refs.wachedBtn.classList.add('library__btn--currenly');
      refs.queueBtn.classList.remove('library__btn--currenly');
      if (watchedFilms?.length) {
        renderGalleryLib(watchedFilms);
      } else {
        refs.filmGalleryLib.innerHTML =
          ' <h2>There are no films in "Watched" collection"</h2>';
      }
    })
    .catch(error => {});
}

function onQueueBtnClick() {
  cloudStorage
    .getUserCollections()
    .then(films => {
      const queueFilms = films?.filter(film => film.tag === QUEUE);
      //   console.log(queueFilms);

      refs.wachedBtn.classList.remove('library__btn--currenly');
      refs.queueBtn.classList.add('library__btn--currenly');
      if (queueFilms?.length) {
        renderGalleryLib(queueFilms);
      } else {
        refs.filmGalleryLib.innerHTML =
          ' <h2>There are no films in "Queue" collection"</h2>';
      }
    })
    .catch(error => {});
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
  //const defaultTheme = localStorage.getItem('Theme');
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
