import movieService from './moviedb/moviedb';
import refs from './refs';

movieService.getMovieTrailer(49046).then(resolve => {
  renderTrailer(resolve.results);
});

export const openModalTrailer = () => {
  refs.modalTrailerBackdrop.classList.remove('is-hidden');
  //   //   document.body.classList.add('modal-open');
  //   //   document.addEventListener('keydown', onModalLoginKeydown);
};

export const closeModalTrailer = () => {
  refs.modalTrailerBackdrop.classList.add('is-hidden');
  //   // document.body.classList.remove('modal-open');
  //   // document.removeEventListener('keydown', onModalLoginKeydown);
};

// ще потрібно звязати id, key ???...
export const filmTrailer = document.querySelector('#player');
// const id = target.getAttribute('data-id');
export const renderTrailer = trailer => {
  const result = trailer
    .map(
      ({ key }) =>
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
    .join('');

  filmTrailer.insertAdjacentHTML('beforeend', result);
};

filmTrailer.addEventListener('click', renderTrailer);
// (() => {
//   const refs = {
//     openModalTrailerBtn: document.querySelector('[data-trailer-modal-open]'),
//     closeModalTrailerBtn: document.querySelector('.modal-trailer__cross-frame'),
//     modalTrailer: document.querySelector('[data-detail-trailer]'),
//   };
//   refs.openModalTrailerBtn.addEventListener('click', toggleModal);
//   refs.closeModalTrailerBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modalTrailer.classList.toggle('is-hidden');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-about-modal-open]'),
//     closeModalBtn: document.querySelector('[data-about-modal-close]'),
//     modal: document.querySelector('[data-about-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();
// $(document).on('click', '#close_vid', function () {
//   jQuery('iframe').each(function () {
//     jQuery(this)[0].contentWindow.postMessage(
//       '{"event":"command","func":"pauseVideo","args":""}',
//       '*'
//     );
//   });
// });
