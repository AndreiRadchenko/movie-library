import movieService from '../js/moviedb/moviedb';
import { spinnerPlay, spinnerStop } from './modal-spinner';
// import cloudeStore from './firebase/cloudstore';

export function renderModalDetail({ target }) {
  spinnerPlay();
  const id = target.getAttribute('data-id');
  movieService
    .getFilmsById(id)
    .then(resolve => {
      console.log(resolve);
      // cloudeStore.currentlyOpenedFilm = resolve;
    })
    .catch(error => console.log(error))
    .finally(() => {
      spinnerStop();
    });
  // console.log(cloudeStore.currentlyOpenedFilm);
}
