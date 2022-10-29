//Юра привіт ). Це мій клас для роботи з бекендом 11 дз. Перероби його під бекенд фільмотеки.
// Ось мій ключ: api_key=9673c8c8f98cb6e489d5cad6b3789836
//
// Потрібно реалізувати наступні методи:
<<<<<<< HEAD
// 1. getFilmsPopular(page=1) --> повертає масив фільмів. Приймає номер сторінки, за замовчуванням 1
// 2. getFilmsById(id)
=======
// 1.+ getFilmsPopular(page=1) --> повертає масив фільмів. Приймає номер сторінки, за замовчуванням 1
// 2.+ getFilmsById(id)
>>>>>>> moviedb

// 3. searchForMovie(movieName, page=1) --> повертає масив фільмів за рядком пошуку
// 4. getMovieTrailer(moiveId)
//
// Клас має містити властивості totalResults, currentPage які будуть оновлюватися при кожному запиті
//
<<<<<<< HEAD
//https://api.themoviedb.org/3/trending/movie/day?api_key=9673c8c8f98cb6e489d5cad6b3789836&page=2
=======

>>>>>>> moviedb
//api.themoviedb.org/3/movie/913290?api_key=9673c8c8f98cb6e489d5cad6b3789836

import axios from 'axios';

<<<<<<< HEAD
export default class FetchMoviService {
=======
class FetchMoviService {
>>>>>>> moviedb
  constructor() {
    // this.searchQuery = '';
    this.page = 1;
    this.total = 0;
    this.fetchedImages = 0;
    this.query = '';
  }

  BASE_URL = 'https://api.themoviedb.org/3/';
  POPULAR_URL = `${this.BASE_URL}/trending/movie/day`;
  SEARCH_URL = `${this.BASE_URL}/search/movie`;
  MOVIE_ID_URL = `${this.BASE_URL}/movie/`;
  RESPONSE_OK = 200;

  searchParams = {
    api_key: '9673c8c8f98cb6e489d5cad6b3789836',
<<<<<<< HEAD
    // image_type: 'photo',
    // orientation: 'horizontal',
    // safesearch: 'true',
    page: 1,
  };

=======
    language: 'en-US',
    include_adult: 'false', // safesearch: 'true',
    page: 1,
  };

  //https://api.themoviedb.org/3/trending/movie/day?api_key=9673c8c8f98cb6e489d5cad6b3789836&page=2

>>>>>>> moviedb
  async getFilmsPopular(page = 1) {
    const { searchParams, POPULAR_URL, RESPONSE_OK } = this;
    searchParams.page = page;
    const response = await axios.get(POPULAR_URL, {
      params: searchParams,
    });
<<<<<<< HEAD
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    this.total = response.data.total_pages;
    return response.data;
  }

  async getFilmsById(id) {
    const { searchParams, MOVIE_ID_URL, RESPONSE_OK } = this;
    const response = await axios.get(MOVIE_ID_URL + id, {
      params: searchParams,
    });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
=======
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    this.total = response.data.total_pages;
>>>>>>> moviedb
    return response.data;
  }

  //api.themoviedb.org/3/movie/913290?api_key=9673c8c8f98cb6e489d5cad6b3789836

  async getFilmsById(id) {
    const { searchParams, MOVIE_ID_URL, RESPONSE_OK } = this;
    const response = await axios.get(MOVIE_ID_URL + id, {
      params: searchParams,
    });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    return response.data;
  }

  //https://api.themoviedb.org/3/search/movie?api_key=9673c8c8f98cb6e489d5cad6b3789836&language=en-US&query=www&page=1&include_adult=false

  async getFilmsSearched(query = 'www', page = 1) {
    const { searchParams, SEARCH_URL, RESPONSE_OK } = this;
    searchParams.page = page;
    searchParams.query = query;
    const response = await axios.get(SEARCH_URL, {
      params: searchParams,
    });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    return response.data;
  }

  //https://api.themoviedb.org/3/movie/913290/videos?api_key=9673c8c8f98cb6e489d5cad6b3789836&language=en-US

  //

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

export default movieService = new FetchMoviService();
