import { renderModalDetail } from '../modal-detail-lib';
import refs from '../refs';
import { refreshLibrary } from '../modal-detail-lib';

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

refs.wachedBtn.classList.add('library__btn--currenly');
refs.queueBtn.classList.remove('library__btn--currenly');

refreshLibrary();

refs.filmGalleryLib.addEventListener('click', renderModalDetail);

export default renderGalleryLib;
// refs.themeBtn.addEventListener('input', changeTheme);
