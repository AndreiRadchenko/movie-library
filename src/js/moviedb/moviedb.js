//Юра привіт ). Це мій клас для роботи з бекендом 11 дз. Перероби його під бекенд фільмотеки.
// Ось мій ключ: api_key=9673c8c8f98cb6e489d5cad6b3789836
//
// Потрібно реалізувати наступні методи:
// 1. getTrending(page=1) --> повертає масив фільмів. Приймає номер сторінки, за замовчуванням 1   https://api.themoviedb.org/3/trending/movie/day?api_key=9673c8c8f98cb6e489d5cad6b3789836
// 2. searchForMovie(movieName, page=1) --> повертає масив фільмів за рядком пошуку  https://api.themoviedb.org/3/search/movie?api_key=9673c8c8f98cb6e489d5cad6b3789836&language=en-US&page=1&include_adult=false&query= ${}
// 3. getMovieDetail(movieId)  https://api.themoviedb.org/3/movie/{movie_id}?api_key=9673c8c8f98cb6e489d5cad6b3789836&language=en-US
// 4. getMovieTrailer(moiveId)
// 5. getGenres()    https://api.themoviedb.org/3/genre/movie/list?api_key=9673c8c8f98cb6e489d5cad6b3789836&language=en-US
//
// Клас має містити властивості totalResults, currentPage які будуть оновлюватися при кожному запиті
//
//

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9673c8c8f98cb6e489d5cad6b3789836';

axios.defaults.baseURL = BASE_URL;

const movieDB = axios.create({
  baseURL: BASE_URL,
});

export const getTrending = async (page = 1) => {
  try {
    const trendingMovieDB = await movieDB
      .get(`trending/movie/day?api_key=${API_KEY}`)
      .then(res => {
        console.log(res);
      });
  } catch (error) {
    console.error(error);
  }
};

// export default class FetchImagesService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.total = 0;
//     this.fetchedImages = 0;
//   }

//   searchParams = {
//     key: '30410400-df54a4fa47e0d802e49478434',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     page: 1,
//     per_page: 40,
//   };

// async fetchImages() {
//   const { searchParams, BASE_URL, RESPONSE_OK } = this;
//   searchParams.q = this.query;
//   searchParams.page = this.page;
//   const response = await axios.get(BASE_URL, { params: searchParams });
//   if (response.status !== RESPONSE_OK) {
//     throw new Error(response.status);
//   }
//   this.total = response.data.total;
//   this.fetchedImages += response.data.hits.length;
//   return response.data;
// }

// incrementPage() {
//   this.page += 1;
// }

// resetPage() {
//   this.page = 1;
//   this.fetchedImages = 0;
//   this.total = 0;
// }

// get query() {
//   return this.searchQuery;
// }

// set query(newQuery) {
//   this.searchQuery = newQuery;
// }
// }
