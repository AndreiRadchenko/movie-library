import cloudStorage from './firebase/cloudstorage';

const modalTrailerBackdropRef = document.querySelector(
  '.modal-trailer__backdrop'
);
const iframeContainerRef = document.querySelector('.modal-trailer');

export const openModalTrailer = () => {
  modalTrailerBackdropRef.classList.remove('is-hidden');
  renderTrailer();
  modalTrailerBackdropRef.addEventListener(
    'click',
    onModalTrailerBackdropClick
  );
};

export const closeModalTrailer = () => {
  modalTrailerBackdropRef.removeEventListener(
    'click',
    onModalTrailerBackdropClick
  );
  iframeContainerRef.innerHTML = '';
  modalTrailerBackdropRef.classList.add('is-hidden');
};

function onModalTrailerBackdropClick(event) {
  if (event.target === modalTrailerBackdropRef) {
    closeModalTrailer();
  }
}

export const renderTrailer = () => {
  const trailerKey = cloudStorage.currentlyOpenedFilm.movieTrailerKey;
  const trailer = `https://www.youtube.com/embed/${trailerKey}`;
  const result = `<div data-modal-tailer-close id="close_vid" class="modal-trailer__cross-frame">
      <i class="fa-solid fa-xmark"></i>
    </div><iframe
      class="modal__iframe"
      src="${trailer}"
      title="Smart Home. Kitchen"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;

  const iframeContainerRef = document.querySelector('.modal-trailer');
  iframeContainerRef.innerHTML = result;

  const modalTrailerCloseBtnRef = document.querySelector(
    '[data-modal-tailer-close]'
  );
  modalTrailerCloseBtnRef.addEventListener('click', closeModalTrailer);
  const modalTrailerBackdropRef = document.querySelector(
    '.modal-trailer__backdrop'
  );
};
