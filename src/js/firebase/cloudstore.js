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

class CloudStore {
  constructor() {
    this.currentlyOpenedFilm = { filmData: null, tag: 'Not_Added' };
  }

  tags = {
    WATCHED: 'Watched',
    QUEUE: 'Queue',
    NOT_ADDED: 'Not_Added',
  };

  async addDataToCollection(filmData, tag) {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      openModalLogin();
      return;
    }
    const usersCollectionRef = collection(db, user);
    this.currentlyOpenedFilm.filmData = filmData;
    this.currentlyOpenedFilm.tag = tag;
    // console.log(this.currentlyOpenedFilm);
    console.log(this.prepareFilmToSave(this.currentlyOpenedFilm));
    await addDoc(
      usersCollectionRef,
      // this.currentlyOpenedFilm
      this.prepareFilmToSave(this.currentlyOpenedFilm)
    );
    console.log(`film added to collection ${tag} of user ${user}`);
  }

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

function searchFilmInLibrary(id) {}

const getUserCollections = async () => {
  const user = localStorage.getItem('currentUser');
  if (!user) {
    console.log('no user loged in');
    return;
  }
  const usersCollectionRef = collection(db, user);
  const data = await getDocs(usersCollectionRef);
  const films = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  console.log(films);
};

const deleteFilm = async () => {
  const filmName = 'new film1';
  const user = localStorage.getItem('currentUser');
  if (!user) {
    console.log('no user loged in');
    return;
  }
  const usersCollectionRef = collection(db, user);
  const data = await getDocs(usersCollectionRef);
  const films = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  const filmToDelete = films.filter(film => film.name === filmName);
  console.log(filmToDelete);
  const userDoc = doc(db, user, filmToDelete[0].id);
  await deleteDoc(userDoc);
  console.log('"new film1" deleted');
};

const cloudeStore = new CloudStore();
export default cloudeStore;
