import movieService from '../moviedb/moviedb';
import { renderGallery, filmGallery } from '../index/gallery';
import { spinnerPlay, spinnerStop } from '../modal-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

export function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { searchQuery },
  } = event.currentTarget;
  const query = searchQuery.value.trim().toLowerCase();
  if (query === '') {
    spinnerPlay();
    movieService
      .getFilmsPopular()
      .then(resolve => {
        renderGallery(resolve.results);
      })
      .finally(() => spinnerStop());
  } else {
    spinnerPlay();
    movieService
      .getFilmsSearched(query)
      .then(resolve => {
        if (resolve.results.length === 0) {
          Notify.failure('No movies found for your search!', {
            position: 'center-center',
            background: '#ff001b',
            fontFamily: 'Roboto',
          });
        }
        renderGallery(resolve.results);
      })
      .finally(() => spinnerStop());
  }
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
