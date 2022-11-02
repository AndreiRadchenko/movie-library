import { renderModalDetail } from '../modal-detail-lib';
import refs from '../refs';
import cloudStorage from '../firebase/cloudstorage';
import { spinnerPlay, spinnerStop } from '../modal-spinner';
import getGanreName from '../moviedb/genres';
import poster from '../../images/gallery/file_not_found.jpg';

const { WATCHED, QUEUE, NOT_ADDED } = cloudStorage.tags;

export const renderGalleryLib = galleryArray => {
  refs.filmGalleryLib.innerHTML = ' ';
  const result = galleryArray
    .map(
      ({
        poster_path,
        original_title,
        genre_ids,
        release_date,
        id,
        vote_average,
      }) => {
        let genres = genre_ids.map(getGanreName);
        if (genres.length > 2) {
          genres = `${genres[0]}, ${genres[1]}, Other`;
        }
        let posterUrl;
        if (!poster_path) {
          posterUrl = poster;
        } else {
          posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        }
        return `<div class="film__card" data-id=${id}>
        <a class="film__link link" href="" onclick="event.preventDefault()">
          <img class="film__img" src=${posterUrl} alt="" data-id=${id} loading="lazy"/>
          <div class="film__info">
            <h3 class="film__title">
              ${original_title}
            </h3>
            <div class="film__details">
          <div class="film__genre">${genres}</div>
          <div class="film__year">${release_date.substr(0, 4)}</div>
          <div class="film__rating">${vote_average.toFixed(1)}</div>
          </div>
          </div>
        </a>
      </div>`;
      }
    )
    .join('');
  refs.filmGalleryLib.innerHTML = result;
};
spinnerPlay();
cloudStorage
  .getUserCollections()
  .then(films => {
    const watchedFilms = films?.filter(film => film.tag === WATCHED);

    refs.wachedBtn.classList.add('library__btn--currenly');
    refs.queueBtn.classList.remove('library__btn--currenly');
    if (!watchedFilms) {
      refs.filmGalleryLib.innerHTML =
        ' <h2>Please login to viewe personal collections</h2>';
      return;
    }
    if (watchedFilms.length) {
      renderGalleryLib(watchedFilms);
    } else {
      refs.filmGalleryLib.innerHTML =
        ' <h2>There are no films in "Watched" collection"</h2>';
    }
  })
  .catch(error => {
    if (error.message === 'No_USER') {
      refs.wachedBtn.classList.add('disabled');
      refs.queueBtn.classList.add('disabled');
      refs.filmGalleryLib.innerHTML =
        ' <h2>Please login to viewe personal collections</h2>';
      return;
    }
  })
  .finally(() => spinnerStop());

refs.filmGalleryLib.addEventListener('click', renderModalDetail);

export default renderGalleryLib;