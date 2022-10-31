// import movieService from './moviedb/moviedb';
// import refs from './refs';

// movieService.getMovieTrailer(id).then(resolve => {
//   renderTrailer(resolve.results);
// });

// export const openModalTrailer = () => {
//   refs.modalTrailerBackdrop.classList.remove('is-hidden');
//   //   document.body.classList.add('modal-open');
//   //   document.addEventListener('keydown', onModalLoginKeydown);
// };

// export const closeModalTrailer = () => {
//   refs.modalTrailerBackdrop.classList.add('is-hidden');
//   // document.body.classList.remove('modal-open');
//   // document.removeEventListener('keydown', onModalLoginKeydown);
// };

// // ще потрібно звязати id, key ???...
// export const filmTrailer = document.querySelector('#palyer');
// export const renderTrailer = trailer => {
//   const result = trailer
//     .map(
//       ({ results }) =>
//         `<iframe width="560" height="315" src="https://www.youtube.com/embed/${results[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     )
//     .join('');
//   //   console.log(key);

//   filmTrailer.insertAdjacentHTML('beforeend', result);
// };
