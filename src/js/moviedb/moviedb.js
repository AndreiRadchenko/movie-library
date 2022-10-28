//Юра привіт ). Це мій клас для роботи з бекендом 11 дз. Перероби його під бекенд фільмотеки.
// Ось мій ключ: api_key=9673c8c8f98cb6e489d5cad6b3789836
//
// Потрібно реалізувати наступні методи:
// 1. getFilmsPopular(page=1) --> повертає масив фільмів. Приймає номер сторінки, за замовчуванням 1
// 2. searchForMovie(movieName, page=1) --> повертає масив фільмів за рядком пошуку
// 3. getMovieDetail(movieId)
// 4. getMovieTrailer(moiveId)
//
// Клас має містити властивості totalResults, currentPage які будуть оновлюватися при кожному запиті
//
//https://api.themoviedb.org/3/trending/movie/day?api_key=9673c8c8f98cb6e489d5cad6b3789836&page=2

import axios from 'axios';

export default class FetchMoviService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.total = 0;
    this.fetchedImages = 0;
  }

  BASE_URL = 'https://api.themoviedb.org/3/';
  POPULAR_URL = `${this.BASE_URL}/trending/movie/day`;
  SEARCH_URL = `${this.BASE_URL}/search/movie`;
  MOVIE_ID_URL = `${this.BASE_URL}/movie/`;
  RESPONSE_OK = 200;

  searchParams = {
    api_key: '9673c8c8f98cb6e489d5cad6b3789836',
    // image_type: 'photo',
    // orientation: 'horizontal',
    // safesearch: 'true',
    page: 1,
  };

  async getFilmsPopular(page = 1) {
    const { searchParams, POPULAR_URL, RESPONSE_OK } = this;
    searchParams.page = page;
    const response = await axios.get(POPULAR_URL, {
      params: searchParams,
    });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    this.total = response.data.total_pages;
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
    this.fetchedImages = 0;
    this.total = 0;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
