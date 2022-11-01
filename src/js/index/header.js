import movieService from '../moviedb/moviedb';
import { renderGallery } from '../index/gallery';
import { query } from 'firebase/firestore';

//ця функція повинна визиватись по кліку на лупу і підставляти замість
//'search query' рядок з інпута
// movieService.getFilmsSearched('fight club').then(resolve => {
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
    console.error('Ввдедіть дані для пошуку!!!');
    return;
  }
  movieService.getFilmsSearched.query = query;

  movieService.getFilmsSearched(query).then(resolve => {
    renderGallery(resolve.results);
  });
}
