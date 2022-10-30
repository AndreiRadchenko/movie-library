import movieService from '../js/moviedb/moviedb';
import { spinnerPlay, spinnerStop } from './modal-spinner';
import cloudStorage from './firebase/cloudstorage';
const { WATCHED, QUEUE, NOT_ADDED } = cloudStorage.tags;

export function renderModalDetail({ target }) {
  spinnerPlay();
  const id = target.getAttribute('data-id');
  movieService
    .getFilmsById(id)
    .then(filmData => {
      // === call addFilmToCollection() for write to userCollection ===
      //   cloudStorage.currentlyOpenedFilm.filmData = filmData;
      //   cloudStorage.addFilmToCollection(QUEUE);
      // === call getUserCollections() to obtain userCollection ===
      //   cloudStorage.getUserCollections().then(films => console.log(films));
      // === call searchFilmInLibrary() to check film in userDB
      // === return undefined in not found film in userDB or return 'Watched' 'Queue'
      //   cloudStorage.searchFilmInCollection(id).then(tag => console.log(tag));
      //   cloudStorage.currentlyOpenedFilm.filmData = filmData;
      //   cloudStorage.deleteFilmFromCollection(
      //     cloudStorage.currentlyOpenedFilm.filmData.id
      //   );
    })
    .catch(error => console.log(error))
    .finally(() => {
      spinnerStop();
    });
}
