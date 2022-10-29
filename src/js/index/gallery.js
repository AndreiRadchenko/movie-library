import FetchMoviService from '../moviedb/moviedb';
import { renderModalDetail } from '../modal-detail';

const movieService = new FetchMoviService();

movieService.getFilmsPopular().then(resolve => {
  renderGallery(resolve.results);
});

export function getFilmsSeached(query, page) {
  return fetch(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
  ).then(respons => respons.json());
}

export function getFilmsById(id) {
  return fetch(`${MOVIE_ID_URL}${id}?api_key=${API_KEY}`).then(respons =>
    respons.json()
  );
}

export const Gallery = galleryArray => {
  const result = galleryArray
    .map(
      ({
        poster_path,
        original_title,
        genre_ids,
        release_date,
        vote_average,
      }) => `<div class="film__card">
          <div class="film__info">
          <a class="film__link" href="">
          <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" />
           <h3 class="film__title">${original_title}</h3>
          <div class="film__details">
          <div class="film__genre">${genre_ids}</div>
          <div class="ilm__year">${release_date.substr(0, 4)}</div>
          <div class="film__rating">${vote_average.toFixed(1)}</div>
          </div>
          </div>
        </a>
      </div>`
    )
    .join('');
};

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
      }) => `<div class="film__card">
        <a class="film__link link" href="" onclick="event.preventDefault()">
          <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" data-id=${id} />
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

  filmGallery.insertAdjacentHTML('beforeend', result);
};

filmGallery.addEventListener('click', renderModalDetail);
