import movieService from './moviedb/moviedb';
import cloudStorage from './firebase/cloudstorage';
import refs from './refs';

// movieService.getMovieTrailer(49046).then(resolve => {
//   renderTrailer(resolve.results);
// });

// movieService.getMovieTrailer('49046').then(resolve => {
//   renderTrailer(resolve.results);
// });

const modalTrailerBackdropRef = document.querySelector(
  '.modal-trailer__backdrop'
);
// const closeModalTrailer = () => {
//   modalTrailerBackdropRef.classList.add('is-hidden');
// };
// const modalTrailerCloseBtnRef = document.querySelector(
//   '[data-modal-tailer-close]'
// );

export const openModalTrailer = () => {
  modalTrailerBackdropRef.classList.remove('is-hidden');
  renderTrailer();
  //   //   document.body.classList.add('modal-open');
  //   //   document.addEventListener('keydown', onModalLoginKeydown);
};

export const closeModalTrailer = () => {
  modalTrailerBackdropRef.classList.add('is-hidden');
  //   //   // document.body.classList.remove('modal-open');
  //   //   // document.removeEventListener('keydown', onModalLoginKeydown);
};

const iframeContainerRef = document.querySelector('.modal-trailer');

// modalTrailerCloseBtnRef.addEventListener('click', closeModalTrailer);

// export const trailer = 'https://www.youtube.com/embed/upCeoeMVbYI';

export const renderTrailer = () => {
  const trailerKey = cloudStorage.currentlyOpenedFilm.movieTrailerKey;
  // console.log(trailerKey);
  const trailer = `https://www.youtube.com/embed/${trailerKey}`;
  console.log(trailer);
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
  const closeModalTrailer = () => {
    modalTrailerBackdropRef.classList.add('is-hidden');
    //   // document.body.classList.remove('modal-open');
    //   // document.removeEventListener('keydown', onModalLoginKeydown);
  };
  modalTrailerCloseBtnRef.addEventListener('click', closeModalTrailer);
  const modalTrailerBackdropRef = document.querySelector(
    '.modal-trailer__backdrop'
  );
};

// $(document).on('click', '#close_vid', function () {
//   jQuery('iframe').each(function () {
//     jQuery(this)[0].contentWindow.postMessage(
//       '{"event":"command","func":"pauseVideo","args":""}',
//       '*'
//     );
//   });
// });
