import FetchMoviService from '../js/moviedb/moviedb';

paginationBox = document.querySelector('.pagination');

const paginationServ = new FetchMoviService();



function paginationСreate(page = 1, totalPage = 1) {

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
      ? `<button type="button" class="" data-page="${
          page - 1
        }""></button>`
      : '';
  
  let rightBtn =
    page != totalPage
      ? `<button type="button" class="" data-page="${
          page + 1
        }">+</button>`
      : '';
  
  let firstBtn = `<button type="button" class="" data-page="1">1</button>`;
  let lastBtn = `<button type="button" class="" data-page="${totalPage}">${totalPage}</button>`;
  let pointBtn = `<button type="button" class="">...</button>`;

  if (pageWidth < 768) {
    paginationMarkUp += leftBtn;

    for (let i = page - 2; i <= page + 2; i++) {
      dataPage = i;

      if (i == page) {
        paginationMarkUp += `<button type="button" class="">${dataPage}</button>`;
        continue;
      }
      if (i <= totalPage && i > 0)
        paginationMarkUp += `<button type="button" class="" data-page="${dataPage}">${dataPage}</button>`;
    }

    paginationMarkUp += rightBtn;
  }

  if (pageWidth >= 768) {

    if (totalPage <= 9) {
      paginationMarkUp += leftBtn;
      for (let i = 1; i <= totalPage; i++) {
        dataPage = i;

        if (i == page) {
          paginationMarkUp += `<button type="button" class="">${dataPage}</button>`;
          continue;
        }
        paginationMarkUp += `<button type="button" class="" data-page="${dataPage}">${dataPage}</button>`;
      }

      paginationMarkUp += rightBtn;
    }

    if (totalPage >= 10) {
      if (page <= 5) {
        paginationMarkUp += leftBtn;

        for (let i = 1; i <= 7; i++) {
          dataPage = i;

          if (i == page) {
            paginationMarkUp += `<button type="button" class="">${dataPage}</button>`;
            continue;
          }
          paginationMarkUp += `<button type="button" class="" data-page="${dataPage}">${dataPage}</button>`;
        }

        paginationMarkUp += pointBtn + lastBtn + rightBtn;
      }

      if (page > totalPage - 5) {
        paginationMarkUp += leftBtn + firstBtn + pointBtn;

        for (let i = totalPage - 6; i <= totalPage; i++) {
          dataPage = i;
          if (i == page) {
            paginationMarkUp += `<button type="button" class="">${dataPage}</button>`;
            continue;
          }
          paginationMarkUp += `<button type="button" class="" data-page="${dataPage}">${dataPage}</button>`;
        }
        paginationMarkUp += rightBtn;
      }

      if (page > 5 && page <= totalPage - 5) {
        paginationMarkUp += leftBtn + firstBtn + pointBtn;

        for (let i = page - 2; i <= page + 2; i++) {
          dataPage = i;
          if (i == page) {
            paginationMarkUp += `<button type="button" class="">${dataPage}</button>`;
            continue;
          }
          paginationMarkUp += `<button type="button" class="" data-page="${dataPage}">${dataPage}</button>`;
        }
        paginationMarkUp += pointBtn + lastBtn + rightBtn;
      }
    }
  }
  paginationBox.innerHTML = paginationMarkUp;
}