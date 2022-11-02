import movieService from './moviedb/moviedb';
import refs from './refs';

// movieService.getMovieTrailer(49046).then(resolve => {
//   renderTrailer(resolve.results);
// });

const modalTrailerBackdropRef = document.querySelector(
  '.modal-trailer__backdrop'
);
const modalTrailerCloseBtnRef = document.querySelector(
  '[data-modal-tailer-close]'
);

export const openModalTrailer = () => {
  modalTrailerBackdropRef.classList.remove('is-hidden');
  renderTrailer();
  //   //   document.body.classList.add('modal-open');
  //   //   document.addEventListener('keydown', onModalLoginKeydown);
};

const closeModalTrailer = () => {
  modalTrailerBackdropRef.classList.add('is-hidden');
  //   // document.body.classList.remove('modal-open');
  //   // document.removeEventListener('keydown', onModalLoginKeydown);
};

const iframeContainerRef = document.querySelector('.modal-trailer');

modalTrailerCloseBtnRef.addEventListener('click', closeModalTrailer);

// export const trailer = 'https://www.youtube.com/embed/upCeoeMVbYI';

export const renderTrailer = (
  trailer = 'https://www.youtube.com/embed/upCeoeMVbYI'
) => {
  const result = `<iframe
      class="modal__iframe"
      src="${trailer}"
      title="Smart Home. Kitchen"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;

  iframeContainerRef.insertAdjacentHTML('beforeend', result);
};
