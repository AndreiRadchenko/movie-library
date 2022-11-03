import movieService from '../moviedb/moviedb';
import { renderGallery } from '../index/gallery';
import { spinnerPlay, spinnerStop } from '../modal-spinner';
import { doc } from 'firebase/firestore';

// ця функція повинна визиватись по кліку на лупу і підставляти замість
// 'search query' рядок з інпута
// movieService.getFilmsSearched().then(resolve => {
//   renderGallery(resolve.results);
// });

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

export function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { searchQuery },
  } = event.currentTarget;
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    // console.error('Ввдедіть дані для пошуку!!!');
    // return;
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
