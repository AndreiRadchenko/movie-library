import movieService from '../js/moviedb/moviedb';
import { spinnerPlay, spinnerStop } from './modal-spinner';

export function renderModalDetail({ target }) {
  spinnerPlay();
  const id = target.getAttribute('data-id');
  movieService
    .getFilmsById(id)
    .then(resolve => {
      console.log(resolve);
    })
    .catch(error => console.log(error))
    .finally(() => {
      spinnerStop();
    });
}
