import movieService from '../moviedb/moviedb';
import { renderModalDetail } from '../modal-detail';
import { spinnerPlay, spinnerStop } from '../modal-spinner';
import { createPagination } from '../index/pagination';
import getGanreName from '../moviedb/genres';
import poster from '../../images/gallery/file_not_found.jpg';

spinnerPlay();
movieService
  .getFilmsPopular()
  .then(resolve => {
    renderGallery(resolve.results);
  })
  .finally(() => spinnerStop());

export const filmGallery = document.querySelector('.gallery');
export const renderGallery = galleryArray => {
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

  filmGallery.innerHTML = result;
  createPagination(movieService.page, movieService.total_pages);
};

filmGallery.addEventListener('click', renderModalDetail);
