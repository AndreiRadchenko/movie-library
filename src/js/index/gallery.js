import movieService from '../moviedb/moviedb';
import { renderModalDetail } from '../modal-detail';
import { spinnerPlay, spinnerStop } from '../modal-spinner';
import { title } from 'process';
import getGenres from '../moviedb/getGenres';
import poster from '../../images/gallery/not_found.jpg';

spinnerPlay();
movieService
  .getFilmsPopular()
  .then(resolve => {
    renderGallery(resolve.results);
  })
  .finally(() => spinnerStop());

// not workable function 2 (for json file)
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
        let genres = genre_ids.map(id => getGenres(id));
        if (genres.length > 2) {
          genres = `${genres[0]}, ${genres[1]}, Other`;
        }
        let posterUrl;
        if (!poster_path) {
          posterUrl = poster;
        } else {
          posterUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;
        }
        return `<div class="film__card" id="${id}">
<a class="film__link link" href="" onclick="event.preventDefault()">
<img class="film__img" src="${posterUrl}/${poster_path}" alt="" loading="lazy" data-id=${id} />
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
};
filmGallery.innerHTML = result;

// not workable function 1 (for genres.js)

// export const filmGallery = document.querySelector('.gallery');
// export default function renderGallery(data, pictureUrl) {
//   return data
//     .map(
//       ({
//         id,
//         poster_path,
//         original_title,
//         genre_ids,
//         release_date,
//         vote_average,
//         genre,
//       }) => {
//         let genresList = [];
//         function getGenre() {
//           genre_ids.map(genre => {
//             genresArr.filter(oneGenre => {
//               if (oneGenre.id === genre) {
//                 genresArr.push(` ${oneGenre.name}`);
//               }
//             });
//           });
//           if (genre_ids.length >= 3) {
//             genresArr.splice(2, genre_ids.length - 1, ' other');
//           }
//         }
//         getGenre();
//         return `<div class="film__card">
// <a class="film__link link" href="" onclick="event.preventDefault()">
// <img class="film__img" src="${pictureUrl}/${poster_path}" alt="" loading="lazy" data-id=${id} />
// <div class="film__info">
// <h3 class="film__title">
// ${original_title}
// </h3>
// <div class="film__details">
// <div class="film__genre">${genre}</div>
// <div class="film__year">${release_date.substr(0, 4)}</div>
// <div class="film__rating">${vote_average.toFixed(1)}</div>
// </div>
// </div>
// </a>
// </div>`;
//       }
//     )
//     .join('');
// }

// !!! working function without genres

// export const filmGallery = document.querySelector('.gallery');
// export const renderGallery = galleryArray => {
//   const result = galleryArray
//     .map(
//       ({
//         poster_path,
//         original_title,
//         genre_ids,
//         release_date,
//         id,
//         vote_average,
//       }) => `<div class="film__card">
//         <a class="film__link link" href="" onclick="event.preventDefault()">
//           <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" data-id=${id} />
//           <div class="film__info">
//             <h3 class="film__title">
//               ${original_title}
//             </h3>
//             <div class="film__details">
//           <div class="film__genre">${genre_ids}</div>
//           <div class="film__year">${release_date.substr(0, 4)}</div>
//           <div class="film__rating">${vote_average.toFixed(1)}</div>
//           </div>
//           </div>
//         </a>
//       </div>`
//     )
//     .join('');

//   // not used
//   //   filmGallery.insertAdjacentHTML('beforeend', result);
//   // filmGallery.insertAdjacentHTML('beforeend', result);

//   // *******************************
//   filmGallery.innerHTML = result;
// };

// filmGallery.addEventListener('click', renderModalDetail);
