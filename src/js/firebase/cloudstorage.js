/*
 - для роботи з екземпляром ініційованим в cloudstore.js необхідно зробити імпорт
   import cloudStorage from './firebase/cloudstore'; в модулі в якому будуть використані
   його методи
 - додавання і видалення фільмів в/з колекції відбувається з модального вікна
   modal-detail.
 - при відкритті модального вікна потрібно записати інформацію про фільм отриману з
   themoviedb у властивість екземпляра 
   cloudStorage.currentlyOpenedFilm.filmData = filmData; для подальших викликів методів
   в колбеках кнопок "add to watched" "add to queue" 
   "delete from watched" "delete from queue"

   приклади викликів методів cloudStorage:

      //import cloudStorage from '../firebase/cloudstorage'; 
      //const { WATCHED, QUEUE, NOT_ADDED } = cloudStorage.tags;

      // === write to userCollection ===
      //   cloudStorage.currentlyOpenedFilm.filmData = filmData;
      //   cloudStorage.addFilmToCollection(WATCHED);

      // === fetch userCollection ===
      //   cloudStorage.getUserCollections().then(films => console.log(films));

      // === check film in userCollection
      // === return undefined if film not found in userCollection or return 
      // === 'Watched' 'Queue'
      //   cloudStorage.searchFilmInCollection(id).then(tag => console.log(tag));

      // === delete currently opened film from userCollection
      // cloudStorage.deleteFilmFromCollection(
      // cloudStorage.currentlyOpenedFilm.filmData.id
      // );

*/

import { db } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { openModalLogin } from '../modal-login';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { spinnerPlay, spinnerStop } from '../modal-spinner';

class CloudStorage {
  constructor() {
    this.currentlyOpenedFilm = {
      filmData: null,
      tag: 'Not_Added',
      movieTrailerKey: undefined,
    };
  }

  tags = {
    WATCHED: 'Watched',
    QUEUE: 'Queue',
    NOT_ADDED: 'Not_Added',
  };

  // додає фільм до колекції користувача з модального вікна madal-detail
  // бере фільм встановлений при відкритті modal-detail як
  // cloudStorage.currentlyOpenedFilm.filmData = filmData; і tag отримує з кнопки
  // 'add to Watched' чи 'add to queue'
  async addFilmToCollection(tag) {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      // openModalLogin();
      Notify.info('Please login to get collection access ');
      throw new Error('No_USER');
    }
    const usersCollectionRef = collection(db, user);
    this.currentlyOpenedFilm.tag = tag;
    await addDoc(
      usersCollectionRef,
      this.prepareFilmToSave(this.currentlyOpenedFilm)
    );
  }

  // повертає з firebase користувача масив фільмів готовий до рендерингу
  // в форматі галереї головної сторінки (з таким же масивом genre_ids)
  // перед рендирингом масив потрібно відфільтрувати по полю tag ('Watched', 'Queue')
  async getUserCollections() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      throw new Error('No_USER');
    }
    const usersCollectionRef = collection(db, user);
    const data = await getDocs(usersCollectionRef);
    const films = data.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
    return films;
  }

  /*
  приймає film id. поветрає undefined якщо незнаходить фільм в колекції або 
  повертає значенн властивості tag 'Watched' чи 'Queue'
   */
  async searchFilmInCollection(id) {
    try {
      const films = await this.getUserCollections();
      const filmTag = films.find(e => e.id === +id)?.tag;
      return filmTag;
    } catch (error) {
      error => console.log(error);
    }
  }

  /*
  видаляє фільм з колекції користувача по id фільму
  для цього отримує колекцію з firebase, знаходить DocId документа фільма
  що має такий id і видаляє документ з цим DocId
*/
  async deleteFilmFromCollection(id) {
    try {
      const user = localStorage.getItem('currentUser');
      const films = await this.getUserCollections();
      const filmToDelete = films.find(film => film.id === id);
      if (!filmToDelete) {
        return;
      }
      const userDoc = doc(db, user, filmToDelete.docId);
      await deleteDoc(userDoc);
    } catch (error) {
      // console.log(error);
    }
  }

  /*
  функція що перетворює детальну інформацію про фільм до такого ж формату 
  який приходить по запиту в галерею головної сторінки
  */
  prepareFilmToSave(filmDetail) {
    const {
      backdrop_path,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    } = filmDetail.filmData;
    const filmForSave = {
      backdrop_path,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    };
    filmForSave.genre_ids = filmDetail.filmData.genres.map(e => e.id);
    filmForSave.tag = filmDetail.tag;
    return filmForSave;
  }
}

const cloudStorage = new CloudStorage();
export default cloudStorage;
