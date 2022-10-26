//Юра привіт ). Це мій клас для роботи з бекендом 11 дз. Перероби його під бекенд фільмотеки.
// Ось мій ключ: api_key=9673c8c8f98cb6e489d5cad6b3789836
//
// Потрібно реалізувати наступні методи:
// 1. getTrending(page=1) --> повертає масив фільмів. Приймає номер сторінки, за замовчуванням 1
// 2. searchForMovie(movieName, page=1) --> повертає масив фільмів за рядком пошуку
// 3. getMovieDetail(movieId)
// 4. getMovieTrailer(moiveId)
//
// Клас має містити властивості totalResults, currentPage які будуть оновлюватися при кожному запиті
//
//

import axios from 'axios';

export default class FetchImagesService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.total = 0;
    this.fetchedImages = 0;
  }

  BASE_URL = 'https://pixabay.com/api/';
  RESPONSE_OK = 200;

  searchParams = {
    key: '30410400-df54a4fa47e0d802e49478434',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: 1,
    per_page: 40,
  };

  async fetchImages() {
    const { searchParams, BASE_URL, RESPONSE_OK } = this;
    searchParams.q = this.query;
    searchParams.page = this.page;
    const response = await axios.get(BASE_URL, { params: searchParams });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    this.total = response.data.total;
    this.fetchedImages += response.data.hits.length;
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
