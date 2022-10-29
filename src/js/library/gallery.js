import { renderModalDetail } from '../modal-detail';
import refs from "../refs"
// import galleryArray from "../library/array.json"


export const filmGalleryLib = document.querySelector('.gallery-library');


export const renderGalleryLib = galleryArray => {
    filmGalleryLib.innerHTML = " ";
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

    filmGalleryLib.insertAdjacentHTML('beforeend', result);
};

getArreyWatched = () => {
    const arreyWatched = localStorage.getItem('wached'); //тут повинен приходити массив фільмів з localStorage ті що в переглянуті
    if (arreyWatched) {
        const arrWatched = JSON.parse(arreyWatched);
        renderGalleryLib(arrWatched);
    }
};

getArreyQueue = () => {
    const arreyQueue = localStorage.getItem('queue'); //тут повинен приходити массив фільмів з localStorage ті що в черзі
    if (arreyQueue) {
        const arrQueue = JSON.parse(arreyQueue);
        renderGalleryLib(arrQueue);
    }
};

filmGalleryLib.addEventListener('click', renderModalDetail);

refs.wachedBtn.addEventListener('click', getArreyWatched);

refs.queueBtn.addEventListener('click', getArreyQueue);

// renderGalleryLib (getArreyQueue.results);