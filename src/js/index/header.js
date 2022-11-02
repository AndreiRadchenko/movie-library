import movieService from '../moviedb/moviedb';
import { renderGallery } from '../index/gallery';
import { spinnerPlay, spinnerStop } from '../modal-spinner';

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
