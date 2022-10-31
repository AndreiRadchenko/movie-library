import movieService from '../js/moviedb/moviedb';
import { spinnerPlay, spinnerStop } from './modal-spinner';
import cloudStorage from './firebase/cloudstorage';
const { WATCHED, QUEUE, NOT_ADDED } = cloudStorage.tags;

const refs = {
  body: document.querySelector('body'),
  showBackdrop: document.querySelector('[data-detail-modal]'),
  modalDetail: document.querySelector('.modal-detal__container'),
  closeModalBtn: document.querySelector('.modal-detail__cross-frame'),
  moviePoster: document.querySelector('.movie-poster'),
  movieInfo: document.querySelector('.movie-data'),
};

export function renderModalDetail({ target }) {
  spinnerPlay();
  const id = target.getAttribute('data-id');
  this.id = '';
  movieService
    .getFilmsById(id)
    .then(data => {
      refs.showBackdrop.classList.remove('is-hidden');
      const markup = modalDetailMarkup(data);
      refs.modalDetail.innerHTML = markup;
      (() => {
        const refs = {
          closeModalBtn: document.querySelector('.modal-detail__cross-frame'),
          modalDetail: document.querySelector('[data-detail-modal]'),
          moviePoster: document.querySelector('.movie-poster'),
          movieInfo: document.querySelector('.movie-data'),
          buttonWatched: document.querySelector('.button-watched'),
        };

        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modalDetail.classList.toggle('is-hidden');
        }
      })();
    })
    .catch(error => console.log(error))
    .finally(() => {
      spinnerStop();
    });
}

const modalDetailMarkup = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) => {
  return ` <div class="modal-detail__cross-frame">
      <i class="fa-solid fa-xmark"></i>
    </div>
  <div class="movie-poster">
  <img
            class="movie-image" data-id="${id}"
            src="https://image.tmdb.org/t/p/w500/${poster_path}"
            alt=""
          />
          </div>
           <div class="movie-data">
          <h2 class="data__title">${title}</h2>
          <ul class="data__list list">
            <li class="list__item">
              <p class="data__item">Vote / Votes
              </p>
              <p class="data__info">
                <span class="data__span data__span--orange">${vote_average}</span>
                <span data__span--divider> / </span>
                <span class="data__span">${vote_count}</span>
              </p>
            </li>
            <li class="list__item">
              <p class="data__item">Popularity</p>
              <p class="data__info">${popularity}</p>
            </li>
            <li class="list__item">
              <p class="data__item">Original Title</p>
              <p class="data__info data__info--upper">${original_title}</p>
            </li>
            <li class="list__item">
              <p class="data__item">Genre</p>
              <p class="data__info">${genres
                .map(genre => genre.name)
                .join(', ')}</p>
            </li>
          </ul>
          <p class="data__about">About</p>
          <p class="data__about-text">${overview}</p>
  <div class="buttons">
        <button
          type="button"
          class="modal-detail__button button-watched"
          data-click="addToWached"
          data-action="addById"
        >
          Add to watched
        </button>
        <button
          type="button"
          data-action="addById"
          class="modal-detail__button button-queue"
          data-click="addToQueue"
        >
          Add to queue
        </button>
      </div>
    </div>`;
};
