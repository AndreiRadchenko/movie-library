//Юра привіт ). Це мій клас для роботи з бекендом 11 дз. Перероби його під бекенд фільмотеки.
// Ось мій ключ: api_key=9673c8c8f98cb6e489d5cad6b3789836
//
// Потрібно реалізувати наступні методи:
// 1.+ getFilmsPopular(page=1) --> повертає масив фільмів. Приймає номер сторінки, за замовчуванням 1
// 2.+ getFilmsById(id)

// 3. searchForMovie(movieName, page=1) --> повертає масив фільмів за рядком пошуку
// 4. getMovieTrailer(moiveId)
//
// Клас має містити властивості totalResults, currentPage які будуть оновлюватися при кожному запиті
//
//api.themoviedb.org/3/movie/913290?api_key=9673c8c8f98cb6e489d5cad6b3789836

import axios from 'axios';
import { spinnerPlay, spinnerStop } from '../modal-spinner';

class FetchMoviService {
  constructor() {
    this.query = '';
    this.page = 1;
    this.total_pages = 0;
    this.total_results = 0;
  }

  BASE_URL = 'https://api.themoviedb.org/3/';
  POPULAR_URL = `${this.BASE_URL}/trending/movie/day`;
  SEARCH_URL = `${this.BASE_URL}/search/movie`;
  MOVIE_ID_URL = `${this.BASE_URL}/movie/`;
  VIDEOS = `/videos`;
  RESPONSE_OK = 200;

  searchParams = {
    api_key: '9673c8c8f98cb6e489d5cad6b3789836',
    language: 'en-US',
    include_adult: 'false', // safesearch: 'true',
    page: 1,
    query: '',
  };

  //https://api.themoviedb.org/3/trending/movie/day?api_key=9673c8c8f98cb6e489d5cad6b3789836&page=2

  async getFilmsPopular(page = 1) {
    const { searchParams, POPULAR_URL, RESPONSE_OK } = this;
    searchParams.page = page;

    const response = await axios.get(POPULAR_URL, {
      params: searchParams,
    });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    this.page = response.data.page;
    this.total_pages = response.data.total_pages;
    this.total_results = response.data.total_results;

    return response.data;
  }

  //https://api.themoviedb.org/3/movie/913290?api_key=9673c8c8f98cb6e489d5cad6b3789836

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

  async getFilmsSearched(query = '', page = 1) {
    const { searchParams, SEARCH_URL, RESPONSE_OK } = this;
    searchParams.page = page;
    searchParams.query = query;
    const response = await axios.get(SEARCH_URL, {
      params: searchParams,
    });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    this.page = response.data.page;
    this.total_pages = response.data.total_pages;
    this.total_results = response.data.total_results;

    return response.data;
  }

  //https://api.themoviedb.org/3/movie/913290/videos?api_key=9673c8c8f98cb6e489d5cad6b3789836&language=en-US

  async getMovieTrailer(id) {
    const { searchParams, MOVIE_ID_URL, VIDEOS, RESPONSE_OK } = this;
    const response = await axios.get(MOVIE_ID_URL + id + VIDEOS, {
      params: searchParams,
    });
    if (response.status !== RESPONSE_OK) {
      throw new Error(response.status);
    }
    return response.data;
  }
  //

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
    this.total_pages = 0;
    this.total_results = 0;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const movieService = new FetchMoviService();

export default movieService;
