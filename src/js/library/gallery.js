import { renderModalDetail } from '../modal-detail-lib';
import refs from '../refs';
import galleryArray from '../library/array.json';
import cloudStorage from '../firebase/cloudstorage';
import { spinnerPlay, spinnerStop } from '../modal-spinner';
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
      }) => `<div class="film__card" data-id=${id}>
            <a class="film__link link" href="" onclick="event.preventDefault()">
            <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" />
            <div class="film__info">
                <h3 class="film__title">
                ${original_title}
                </h3>
                <div class="film__details">
            <div class="film__genre">${genre_ids}</div>
            <div class="film__year">${release_date.substr(0, 4)}</div>
            <div class="film__rating">${vote_average.toFixed(1)}</div>
            </div>
            </div>
            </a>
        </div>`
    )
    .join('');
  refs.filmGalleryLib.innerHTML = result;
};
spinnerPlay();
cloudStorage
  .getUserCollections()
  .then(films => {
    const watchedFilms = films?.filter(film => film.tag === WATCHED);
    // console.log(watchedFilms);

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

// getArreyWatched = () => {
//   // const arreyWatched = localStorage.getItem('wached'); //тут повинен приходити массив фільмів з localStorage ті що в переглянуті
//   const arreyWatched = galleryArray.results;
//   refs.wachedBtn.classList.toggle('library__btn--currenly');
//   refs.queueBtn.classList.remove('library__btn--currenly');
//   if (arreyWatched) {
//     // const arrWatched = JSON.parse(arreyWatched);
//     renderGalleryLib(arreyWatched);
//   } else {
//     refs.filmGalleryLib.innerHTML = ' ';
//   }
// };

// getArreyQueue = () => {
//   // const arreyQueue = localStorage.getItem('queue'); //тут повинен приходити массив фільмів з localStorage ті що в черзі
//   const arreyQueue = galleryArray.results;
//   refs.queueBtn.classList.toggle('library__btn--currenly');
//   refs.wachedBtn.classList.remove('library__btn--currenly');
//   if (arreyQueue) {
//     // const arrQueue = JSON.parse(arreyQueue);
//     renderGalleryLib(arreyQueue);
//   } else {
//     refs.filmGalleryLib.innerHTML = ' ';
//   }
// };

// changeTheme = () => {
//   refs.body.classList.toggle('dark-theme');
//   refs.filmGalleryLib.classList.toggle('dark-theme');
// };

refs.filmGalleryLib.addEventListener('click', renderModalDetail);

export default renderGalleryLib;
// refs.themeBtn.addEventListener('input', changeTheme);
