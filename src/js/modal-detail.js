import movieService from '../js/moviedb/moviedb';

export function renderModalDetail({ target }) {
  const id = target.getAttribute('data-id');
  movieService
    .getFilmsById(id)
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error => console.log(error));
}
