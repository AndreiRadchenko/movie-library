import movieService from '../moviedb/moviedb';

paginationBox = document.querySelector('.pagination');

const page = movieService.page;
const totalPage = movieService.total;
console.log(totalPage);
console.log(movieService.total);
console.log(page);

console.log(movieService);

console.log('page', movieService.page);
console.log('total_pages', movieService.total);
console.log(movieService);

console.log('page', movieService.page);
console.log('total_pages', movieService.total);

function paginationСreate(page, totalPage) {

  if (totalPage === 1) {
    paginationBox.innerHTML = '';
    return;
  }

  let paginationMarkUp = '';
  const pageWidth = document.documentElement.scrollWidth;

  // document.body.offsetWidth,
  // document.documentElement.offsetWidth,
  // document.documentElement.clientWidth

  let dataPage = '';
  
  
  //arrow buttons
  let leftBtn =
    page != 1
      ? `<button type="button" class="pagination_button pagination_button-arrow" data-page="${
          page - 1
        }""><i class="fa-solid fa-arrow-left"></i></button>`
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

      if (i == page) {
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

        if (i == page) {
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

          if (i == page) {
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
          if (i == page) {
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
          if (i == page) {
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

function onPaginationBtnClick(e, callback) {
  if (!e?.dataset?.page) return;
  window.scrollTo({
    top: 0,
    left: 0,
  });
  callback(Number(e.dataset.page));
}

paginationBox.addEventListener('click', e => {
  onPaginationBtnClick(e.target, movieService.getFilmsPopular);
})

paginationСreate(page, totalPage);