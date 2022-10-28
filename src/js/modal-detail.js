import FetchMoviService from '../js/moviedb/moviedb';

const modalMovieService = new FetchMoviService();

export function renderModalDetail({ target }) {
  const id = target.getAttribute('data-id');
  modalMovieService
    .getFilmsById(id)
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error => console.log(error));
}
