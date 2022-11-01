import genres from '../moviedb/genres.json';

export default function getGenres(id) {
  return genres[id];
}
