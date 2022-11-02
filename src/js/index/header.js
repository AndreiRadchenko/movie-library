import movieService from '../moviedb/moviedb';
import { renderGallery } from '../index/gallery';
import { spinnerPlay, spinnerStop } from '../modal-spinner';

// ця функція повинна визиватись по кліку на лупу і підставляти замість
// 'search query' рядок з інпута
// movieService.getFilmsSearched().then(resolve => {
//   renderGallery(resolve.results);
// });

const form = document.querySelector('.form');
const emptyGllery = document.querySelector('.empty-gallery');
const paginationBox = document.querySelector('.pagination');

form.addEventListener('submit', handleSubmit);

export function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { searchQuery },
  } = event.currentTarget;
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    spinnerPlay();
    emptyGllery.innerHTML = '<h2>Please enter the movie name</h2>';
    paginationBox.innerHTML = '';
    spinnerStop();
  } else {
    spinnerPlay();
    movieService
      .getFilmsSearched(query)
      .then(resolve => {
        if (resolve.results.length === 0) {
          spinnerPlay();
          emptyGllery.innerHTML = '<h2>No movies found for your search</h2>';
          paginationBox.innerHTML = '';
          spinnerStop();
          return;
        }
        renderGallery(resolve.results);
      })
      .finally(() => spinnerStop());
  }
}
