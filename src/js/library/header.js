import refs from '../refs';
import { refreshLibrary } from '../modal-detail-lib';

refs.wachedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  refs.wachedBtn.classList.add('library__btn--currenly');
  refs.queueBtn.classList.remove('library__btn--currenly');
  refreshLibrary();
}

function onQueueBtnClick() {
  refs.wachedBtn.classList.remove('library__btn--currenly');
  refs.queueBtn.classList.add('library__btn--currenly');
  refreshLibrary();
}
