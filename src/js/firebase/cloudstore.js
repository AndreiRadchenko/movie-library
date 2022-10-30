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
    this.currentlyOpenedFilm = null;
    this.collection = 'Not_Added';
  }
  static Collection = {
    WATCHED: 'Watched',
    QUEUE: 'Queue',
    NOT_ADDED: 'Not_Added',
  };
}

const WATCHED = 'Watched';
const QUEUE = 'Queue';
let currentlyOpenedFilm;

function searchFilmInLibrary(id) {}

// argument 'collection' contain collection name, WATCHED or QUEUE
const addDataToCollection = async collection => {
  const user = localStorage.getItem('currentUser');
  if (!user) {
    //   console.log('no user loged in');
    openModalLogin();
    return;
  }
  const usersCollectionRef = collection(db, user);
  await addDoc(usersCollectionRef, { name: 'new film', collection });
  console.log('film added to watched collection');
};

const addDataToCollection2 = async () => {
  const user = localStorage.getItem('currentUser');
  if (!user) {
    console.log('no user loged in');
    return;
  }
  const usersCollectionRef = collection(db, user);
  await addDoc(usersCollectionRef, { name: 'new film', collection: 'queue' });
  console.log('film added to queue collection');
};

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
