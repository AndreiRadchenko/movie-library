import movieService from '../moviedb/moviedb';
import { spinnerPlay, spinnerStop } from '../modal-spinner';
import { renderGallery } from './gallery';

const paginationBox = document.querySelector('.pagination');

export function createPagination(page, totalPage) {
  if (totalPage === 0 || totalPage === 1) {
    paginationBox.innerHTML = '';
    return;
  }

  let paginationMarkUp = '';
  const pageWidth = document.documentElement.scrollWidth;

  let dataPage = '';

  //arrow buttons
  let leftBtn =
    page != 1
      ? `<button type="button" class="pagination_button pagination_button-arrow" data-page="${
          page - 1
        }"><i class="fa-solid fa-arrow-left"></i></button>`
      : '';

  let rightBtn =
    page != totalPage
      ? `<button type="button" class="pagination_button pagination_button-arrow" data-page="${
          page + 1
        }"><i class="fa-solid fa-arrow-right"></i></button>`
      : '';

  let firstBtn = `<button type="button" class="pagination_button" data-page="1">1</button>`;
  let lastBtn = `<button type="button" class="pagination_button" data-page="${totalPage}">${totalPage}</button>`;
  let pointBtn = `<button type="button" class="pagination_button pagination_button-points">...</button>`;

  if (pageWidth < 768) {
    paginationMarkUp += leftBtn;

    for (let i = page - 2; i <= page + 2; i++) {
      dataPage = i;

      if (i === page) {
        paginationMarkUp += `<button type="button" class="pagination_button pagination_button-active">${dataPage}</button>`;
        continue;
      }
      if (i <= totalPage && i > 0)
        paginationMarkUp += `<button type="button" class="pagination_button" data-page="${dataPage}">${dataPage}</button>`;
    }

    paginationMarkUp += rightBtn;
  }

  if (pageWidth >= 768) {
    if (totalPage <= 9) {
      paginationMarkUp += leftBtn;
      for (let i = 1; i <= totalPage; i++) {
        dataPage = i;

        if (i === page) {
          paginationMarkUp += `<button type="button" class="pagination_button pagination_button-active">${dataPage}</button>`;
          continue;
        }
        paginationMarkUp += `<button type="button" class="pagination_button" data-page="${dataPage}">${dataPage}</button>`;
      }

      paginationMarkUp += rightBtn;
    }

    if (totalPage >= 10) {
      if (page <= 5) {
        paginationMarkUp += leftBtn;

        for (let i = 1; i <= 7; i++) {
          dataPage = i;

          if (i === page) {
            paginationMarkUp += `<button type="button" class="pagination_button pagination_button-active">${dataPage}</button>`;
            continue;
          }
          paginationMarkUp += `<button type="button" class="pagination_button" data-page="${dataPage}">${dataPage}</button>`;
        }

        paginationMarkUp += pointBtn + lastBtn + rightBtn;
      }

      if (page > totalPage - 5) {
        paginationMarkUp += leftBtn + firstBtn + pointBtn;

        for (let i = totalPage - 6; i <= totalPage; i++) {
          dataPage = i;
          if (i === page) {
            paginationMarkUp += `<button type="button" class="pagination_button pagination_button-active">${dataPage}</button>`;
            continue;
          }
          paginationMarkUp += `<button type="button" class="pagination_button" data-page="${dataPage}">${dataPage}</button>`;
        }
        paginationMarkUp += rightBtn;
      }

      if (page > 5 && page <= totalPage - 5) {
        paginationMarkUp += leftBtn + firstBtn + pointBtn;

        for (let i = page - 2; i <= page + 2; i++) {
          dataPage = i;
          if (i === page) {
            paginationMarkUp += `<button type="button" class="pagination_button pagination_button-active">${dataPage}</button>`;
            continue;
          }
          paginationMarkUp += `<button type="button" class="pagination_button" data-page="${dataPage}">${dataPage}</button>`;
        }
        paginationMarkUp += pointBtn + lastBtn + rightBtn;
      }
    }
  }
  paginationBox.innerHTML = paginationMarkUp;
}

function onPaginationBtnClick(e) {
  document.body.scrollIntoView();
  const page = Number(e.dataset.page);

  if (movieService.searchParams.query === '') {
    spinnerPlay();
    movieService
      .getFilmsPopular(page)
      .then(resolve => {
        renderGallery(resolve.results);
      })
      .finally(() => spinnerStop());
  } else {
    spinnerPlay();
    movieService
      .getFilmsSearched(movieService.searchParams.query, page)
      .then(resolve => {
        renderGallery(resolve.results);
      })
      .finally(() => spinnerStop());
  }
}

paginationBox.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  onPaginationBtnClick(e.target);
});
