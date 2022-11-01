import { membersOfteam } from './members-Of-team.js';
import { createTeamGalleryHtml } from './modal-Team-markup.js';
import confetti from 'canvas-confetti';
import refs from './refs';

function showConfetti() {
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({
    particleCount: 1000,
    spread: 1000,
    zIndex: 2022,
    shapes: ['star', 'circle', 'star'],
    colors: ['#ff6b08', '#ffffff', '#545454', '#ff6b08'],
  });
}

function openModalMarkup() {
  const markup = createTeamGalleryHtml(membersOfteam);
  refs.modalTeamGalery.insertAdjacentHTML('beforeend', markup);
}

const openModalTeam = e => {
  e.preventDefault();
  refs.modalTeamGalery.innerHTML = '';
  showConfetti();
  openModalMarkup();
  refs.modalLoginBackdropTeam.classList.remove('is-hidden-team');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalTeamKeydown);
};

const closeModalTeam = () => {
  refs.modalLoginBackdropTeam.classList.add('is-hidden-team');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalTeamKeydown);
};

const onModalTeamClose = event => {
  closeModalTeam();
};

const onModalTeamBackdropClick = event => {
  if (event.target === refs.modalLoginBackdropTeam) {
    closeModalTeam();
  }
};

const onModalTeamKeydown = event => {
  if (event.code === 'Escape') {
    closeModalTeam();
  }
};

refs.btnModalLoginCloseTeam.addEventListener('click', onModalTeamClose);
refs.modalLoginBackdropTeam.addEventListener('click', onModalTeamBackdropClick);
refs.modalTeam.addEventListener('click', openModalTeam);
