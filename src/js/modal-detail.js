import movieService from '../js/moviedb/moviedb';
import { spinnerPlay, spinnerStop } from './modal-spinner';
import cloudeStore from './firebase/cloudstore';
const { WATCHED, QUEUE, NOT_ADDED } = cloudeStore.tags;

export function renderModalDetail({ target }) {
  spinnerPlay();
  const id = target.getAttribute('data-id');
  movieService
    .getFilmsById(id)
    .then(filmData => {
      // console.log(resolve);
      // cloudeStore.currentlyOpenedFilm.filmData = resolve;
      // cloudeStore.currentlyOpenedFilm.collection = QUEUE;
      cloudeStore.addDataToCollection(filmData, QUEUE);
    })
    .catch(error => console.log(error))
    .finally(() => {
      spinnerStop();
    });
}
