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
