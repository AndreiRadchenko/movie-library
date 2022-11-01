import refs from '../refs';
import { renderGalleryLib } from './gallery';
import cloudStorage from '../firebase/cloudstorage';
const { WATCHED, QUEUE, NOT_ADDED } = cloudStorage.tags;

refs.wachedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  cloudStorage
    .getUserCollections()
    .then(films => {
      const watchedFilms = films?.filter(film => film.tag === WATCHED);
      //   console.log(watchedFilms);

      refs.wachedBtn.classList.add('library__btn--currenly');
      refs.queueBtn.classList.remove('library__btn--currenly');
      if (watchedFilms?.length) {
        renderGalleryLib(watchedFilms);
      } else {
        refs.filmGalleryLib.innerHTML =
          ' <h2>There are no films in "Watched" collection"</h2>';
      }
    })
    .catch(error => {});
}

function onQueueBtnClick() {
  cloudStorage
    .getUserCollections()
    .then(films => {
      const queueFilms = films?.filter(film => film.tag === QUEUE);
      //   console.log(queueFilms);

      refs.wachedBtn.classList.remove('library__btn--currenly');
      refs.queueBtn.classList.add('library__btn--currenly');
      if (queueFilms?.length) {
        renderGalleryLib(queueFilms);
      } else {
        refs.filmGalleryLib.innerHTML =
          ' <h2>There are no films in "Queue" collection"</h2>';
      }
    })
    .catch(error => {});
}
