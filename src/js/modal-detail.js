import FetchMoviService from '../js/moviedb/moviedb';
// import { movieService } from './index/gallery';
import movieService from './moviedb/moviedb';

// const modalMovieService = new FetchMoviService();

export function renderModalDetail({ target }) {
  const id = target.getAttribute('data-id');
  movieService
    .getFilmsById(id)
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error => console.log(error));
}
