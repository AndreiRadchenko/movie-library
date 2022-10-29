import FetchMoviService from '../js/moviedb/moviedb';
import { spinnerPlay, spinnerStop } from './modal-spinner';
const modalMovieService = new FetchMoviService();

export function renderModalDetail({ target }) {
  spinnerPlay();
  const id = target.getAttribute('data-id');
  modalMovieService
    .getFilmsById(id)
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error => console.log(error))
    .finally(() => {
      spinnerStop();
    });
}
