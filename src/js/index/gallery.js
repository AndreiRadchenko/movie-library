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
        <a class="film__link link" href="">
          <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" />
          <div class="film__info">
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

// const refs = getRefs();

// export default function MarkUp(data) {
//   const markUp = data
//     .map(
//       ({
//         poster_path,
//         title,
//         genre_ids,
//         release_date,
//         id,
//         vote_average: rating,
//       }) => {
//         const genresToCards = createGenresText(genre_ids);
//         return `
//       <div class="film__card">
//         <a href="javascript:void(0)" class="film__link">
//             <picture>
//                 <source srcset="
//                 ${setPoster(poster_path, 'original')} 1x,
//                 ${setPoster(poster_path, 'original')} 2x
//                 "
//                 media="(min-width: 1024px)"
//                 >
//                 <source srcset="
//                 ${setPoster(poster_path, 'w500')} 1x,
//                 ${setPoster(poster_path, 'w500')} 2x
//                 "
//                 media="(min-width: 768px)"
//                 >
//               <source srcset="
//                 ${setPoster(poster_path, 'w300')} 1x,
//                 ${setPoster(poster_path, 'w300')} 2x
//                 "
//                 >
//               <img src="${setPoster(poster_path, 'w300')}"
//               alt=""
//               class="film__img"
//               data-id="${id}"
//               loading="lazy"/>
//             </picture>
//           </div>
//           <div class="film__info">
//             <h3 class="film__name">${trimStr(title.toUpperCase())}</h3>
//             <div class="film__details">
//               <div class="film__genre">${trimStr(genresToCards)}</div>
//                 <div class="film__year">${setReleaseDate(release_date)}</div>
//                  <div class="film__rating">${rating}</div>
//               </div>
//           </div>
//           </div>
//         </a>
//       </div>`;
//       }
//     )
//     .join('');

//   refs.gallery.insertAdjacentHTML('beforeend', markUp);
// }

// function setPoster(poster, imgSize) {
//   if (poster === null) {
//     return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
//   }

//   return `https://image.tmdb.org/t/p/${imgSize}${poster}`;
// }

// function setReleaseDate(year) {
//   if (!year) {
//     return 'No data';
//   }
//   return year.slice(0, 4);
// }
// function trimStr(str) {
//   if (str.length > 33) {
//     return `${str.substring(0, 30)} <span class="string">...</span>`;
//   }
//   return str;
// }
