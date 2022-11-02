import movieService from './moviedb/moviedb';
import { spinnerPlay, spinnerStop } from './modal-spinner';
import cloudStorage from './firebase/cloudstorage';
import renderGalleryLib from '../js/library/gallery';
// import refs from '../js/refs';
const { WATCHED, QUEUE, NOT_ADDED } = cloudStorage.tags;

const ADD = 'add';
const DELETE = 'delete';

const refs = {
  body: document.querySelector('body'),
  showBackdrop: document.querySelector('[data-detail-modal]'),
  modalDetail: document.querySelector('.modal-detal__container'),
  closeModalBtn: document.querySelector('.modal-detail__cross-frame'),
  moviePoster: document.querySelector('.movie-poster'),
  movieInfo: document.querySelector('.movie-data'),
  modalDetailBackdrop: document.querySelector('.modal-detail__backdrop'),
  filmGalleryLib: document.querySelector('.gallery-library'),
};

export function renderModalDetail({ target }) {
  if (target.classList.contains('gallery')) {
    return;
  }
  spinnerPlay();
  const filmCard = target.closest('[data-id]');
  const id = filmCard.getAttribute('data-id');
  this.id = '';
  movieService
    .getFilmsById(id)
    .then(data => {
      refs.showBackdrop.classList.remove('is-hidden');
      const markup = modalDetailMarkup(data);
      refs.modalDetail.innerHTML = markup;
      cloudStorage.currentlyOpenedFilm.filmData = data;
      (() => {
        const refs = {
          closeModalBtn: document.querySelector('.modal-detail__cross-frame'),
          modalDetail: document.querySelector('[data-detail-modal]'),
          moviePoster: document.querySelector('.movie-poster'),
          movieInfo: document.querySelector('.movie-data'),
          buttonWatched: document.querySelector('.button-watched'),
          buttonQueue: document.querySelector('.button-queue'),
        };

        setButtonStyle({
          buttonWatched: refs.buttonWatched,
          buttonQueue: refs.buttonQueue,
          id: data.id,
        });

        refs.closeModalBtn.addEventListener('click', closeModalDetail);
        refs.buttonWatched.addEventListener('click', onButtonWatchedClick);
        refs.buttonQueue.addEventListener('click', onButtonQueueClick);
      })();
    })
    .catch(error => console.log(error))
    .finally(() => {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', onModalDetailKeydown);
      refs.modalDetailBackdrop.addEventListener(
        'click',
        onModalDetailBackdropClick
      );
      spinnerStop();
    });
}

function closeModalDetail() {
  refs.modalDetailBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalDetailKeydown);
  refs.modalDetailBackdrop.removeEventListener(
    'click',
    onModalDetailBackdropClick
  );
  refreshLibrary();
}

function onModalDetailKeydown(event) {
  if (event.code === 'Escape') {
    closeModalDetail();
  }
}

function onModalDetailBackdropClick(event) {
  if (event.target === refs.modalDetailBackdrop) {
    closeModalDetail();
  }
}

async function refreshLibrary() {
  let currentLibrary;
  try {
    const btnWatchedCollection = document.querySelector('.js-btn-watched');
    if (btnWatchedCollection.classList.contains('library__btn--currenly')) {
      currentLibrary = WATCHED;
    } else {
      currentLibrary = QUEUE;
    }
    await cloudStorage
      .getUserCollections()
      .then(films => {
        const filmsSorted = films?.filter(film => film.tag === currentLibrary);
        //   console.log(watchedFilms);
        if (filmsSorted.length) {
          renderGalleryLib(filmsSorted);
        } else {
          refs.filmGalleryLib.innerHTML =
            ' <h2>There are no films in "Watched" collection</h2>';
        }
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log('on main page');
    return;
  }
}

async function setButtonStyle({ buttonWatched, buttonQueue, id }) {
  const tag = await cloudStorage.searchFilmInCollection(id);
  if (tag === WATCHED) {
    buttonWatched.textContent = 'Remove from watched';
    buttonWatched.dataset.action = DELETE;
    buttonWatched.classList.add('button-active');

    buttonQueue.textContent = 'Add to queue';
    buttonQueue.dataset.action = ADD;
    buttonQueue.classList.remove('button-active');
  } else if (tag === QUEUE) {
    buttonWatched.textContent = 'Add to watched';
    buttonWatched.dataset.action = ADD;
    buttonWatched.classList.remove('button-active');

    buttonQueue.textContent = 'Remove from queue';
    buttonQueue.dataset.action = DELETE;
    buttonQueue.classList.add('button-active');
  } else {
    buttonWatched.textContent = 'Add to watched';
    buttonWatched.dataset.action = ADD;
    buttonWatched.classList.remove('button-active');

    buttonQueue.textContent = 'Add to queue';
    buttonQueue.dataset.action = ADD;
    buttonQueue.classList.remove('button-active');
  }
}

async function onButtonWatchedClick({ target: buttonWatched }) {
  const modalContainer = document.querySelector('.modal-detal__container');
  const buttonQueue = document.querySelector('.button-queue');
  const watchedBtnState = buttonWatched.dataset.action;
  const queueBtnState = buttonQueue.dataset.action;
  if (watchedBtnState === ADD && queueBtnState === ADD) {
    cloudStorage.addFilmToCollection(WATCHED);
    buttonWatched.dataset.action = DELETE;
    buttonWatched.textContent = 'Remove from watched';
    buttonWatched.classList.add('button-active');
  } else if (watchedBtnState === ADD && queueBtnState === DELETE) {
    await cloudStorage.deleteFilmFromCollection(
      cloudStorage.currentlyOpenedFilm.filmData.id
    );
    await cloudStorage.addFilmToCollection(WATCHED);
    buttonWatched.dataset.action = DELETE;
    buttonWatched.textContent = 'Remove from watched';
    buttonWatched.classList.add('button-active');

    buttonQueue.textContent = 'Add to queue';
    buttonQueue.dataset.action = ADD;
    buttonQueue.classList.remove('button-active');
  } else if (watchedBtnState === DELETE) {
    await cloudStorage.deleteFilmFromCollection(
      cloudStorage.currentlyOpenedFilm.filmData.id
    );
    buttonWatched.dataset.action = ADD;
    buttonWatched.textContent = 'Add to watched';
    buttonWatched.classList.remove('button-active');
  }
  // modalContainer.click();
}

async function onButtonQueueClick({ target: buttonQueue }) {
  const modalContainer = document.querySelector('.modal-detal__container');
  const buttonWatched = document.querySelector('.button-watched');
  const watchedBtnState = buttonWatched.dataset.action;
  const queueBtnState = buttonQueue.dataset.action;
  if (queueBtnState === ADD && watchedBtnState === ADD) {
    cloudStorage.addFilmToCollection(QUEUE);
    buttonQueue.dataset.action = DELETE;
    buttonQueue.textContent = 'Remove from queue';
    buttonQueue.classList.add('button-active');
  } else if (queueBtnState === ADD && watchedBtnState === DELETE) {
    await cloudStorage.deleteFilmFromCollection(
      cloudStorage.currentlyOpenedFilm.filmData.id
    );
    await cloudStorage.addFilmToCollection(QUEUE);
    buttonQueue.dataset.action = DELETE;
    buttonQueue.textContent = 'Remove from queue';
    buttonQueue.classList.add('button-active');

    buttonWatched.textContent = 'Add to watched';
    buttonWatched.dataset.action = ADD;
    buttonWatched.classList.remove('button-active');
  } else if (queueBtnState === DELETE) {
    await cloudStorage.deleteFilmFromCollection(
      cloudStorage.currentlyOpenedFilm.filmData.id
    );
    buttonQueue.dataset.action = ADD;
    buttonQueue.textContent = 'Add to queue';
    buttonQueue.classList.remove('button-active');
  }
  // modalContainer.click();
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
               <div class="modal-detail__youtube" data-modal-youtube>
      <i class="fa-brands fa-youtube"></i>
    </div>
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
          data-action="add"
        >
          Add to watched
        </button>
        <button
          type="button"
          data-action="add"
          class="modal-detail__button button-queue"
          data-click="addToQueue"
        >
          Add to queue
        </button>
      </div>
    </div>`;
};
