function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=a.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},a.parcelRequired7c6=i),i.register("kyEFX",(function(e,a){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)i[e[a]]=t[e[a]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.85ef37c3.js","b6EE6":"file_not_found.886b5e99.jpg","b9auz":"index.eda20f21.js"}')),i("dldQF"),i("1wOgB"),i("lcy31");var d,l=i("iB1XX"),s=(l=i("iB1XX"),l=i("iB1XX"),i("1XX55")),u=i("jkUgE"),c=i("I2Abx");d=new URL(i("kyEFX").resolve("b6EE6"),import.meta.url).toString();const{WATCHED:r,QUEUE:m,NOT_ADDED:p}=u.default.tags,b={body:document.querySelector("body"),showBackdrop:document.querySelector("[data-detail-modal]"),modalDetail:document.querySelector(".modal-detal__container"),closeModalBtn:document.querySelector(".modal-detail__cross-frame"),movieInfo:document.querySelector(".movie-data"),modalDetailBackdrop:document.querySelector(".modal-detail__backdrop"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".pagination")};function f(){b.modalDetailBackdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",_),b.modalDetailBackdrop.removeEventListener("click",v)}function _(t){"Escape"===t.code&&f()}function v(t){t.target===b.modalDetailBackdrop&&f()}async function y({target:t}){document.querySelector(".modal-detal__container");const e=document.querySelector(".button-queue"),a=t.dataset.action,n=e.dataset.action;if("add"===a&&"add"===n)try{await u.default.addFilmToCollection(r),t.dataset.action="delete",t.textContent="Remove from watched",t.classList.add("button-active")}catch(t){}else"add"===a&&"delete"===n?(await u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id),await u.default.addFilmToCollection(r),t.dataset.action="delete",t.textContent="Remove from watched",t.classList.add("button-active"),e.textContent="Add to queue",e.dataset.action="add",e.classList.remove("button-active")):"delete"===a&&(await u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id),t.dataset.action="add",t.textContent="Add to watched",t.classList.remove("button-active"))}async function g({target:t}){document.querySelector(".modal-detal__container");const e=document.querySelector(".button-watched"),a=e.dataset.action,n=t.dataset.action;if("add"===n&&"add"===a)try{await u.default.addFilmToCollection(m),t.dataset.action="delete",t.textContent="Remove from queue",t.classList.add("button-active")}catch(t){}else if("add"===n&&"delete"===a){await u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id);try{await u.default.addFilmToCollection(m),t.dataset.action="delete",t.textContent="Remove from queue",t.classList.add("button-active"),e.textContent="Add to watched",e.dataset.action="add",e.classList.remove("button-active")}catch(t){}}else"delete"===n&&(await u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id),t.dataset.action="add",t.textContent="Add to queue",t.classList.remove("button-active"))}const h=({id:t,poster_path:a,title:n,vote_average:o,vote_count:i,popularity:l,original_title:s,genres:u,overview:c})=>` <div class="modal-detail__cross-frame">\n      <i class="fa-solid fa-xmark"></i>\n    </div>\n  <div class="movie-poster">\n  <img\n            class="movie-image" data-id="${t}"\n            src = "${a?`https://image.tmdb.org/t/p/w500/${a}`:e(d)}"\n            alt=""\n          />\n          <div class="modal-detail__youtube visually-hidden" data-modal-youtube>\n      <i class="fa-brands fa-youtube"></i>\n    </div>\n          </div>\n           <div class="movie-data">\n          <h2 class="data__title">${n}</h2>\n          <ul class="data__list list">\n            <li class="list__item">\n              <p class="data__item">Vote / Votes\n              </p>\n              <p class="data__info">\n                <span class="data__span data__span--orange">${o}</span>\n                <span data__span--divider> / </span>\n                <span class="data__span">${i}</span>\n              </p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Popularity</p>\n              <p class="data__info">${l}</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Original Title</p>\n              <p class="data__info data__info--upper">${s}</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Genre</p>\n              <p class="data__info">${u.map((t=>t.name)).join(", ")}</p>\n            </li>\n          </ul>\n          <p class="data__about">About</p>\n          <p class="data__about-text">${c}</p>\n  <div class="buttons">\n        <button\n          type="button"\n          class="modal-detail__button button-watched"\n          data-click="addToWached"\n          data-action="add"\n        >\n          Add to watched\n        </button>\n        <button\n          type="button"\n          data-action="add"\n          class="modal-detail__button button-queue"\n          data-click="addToQueue"\n        >\n          Add to queue\n        </button>\n      </div>\n    </div>`;s=i("1XX55"),l=i("iB1XX"),s=i("1XX55");const w=document.querySelector(".pagination");function L(t,e){if(0===e||1===e)return void(w.innerHTML="");let a="";const n=document.documentElement.scrollWidth;let o="",i=1!=t?`<button type="button" class="pagination_button pagination_button-arrow" data-page="${t-1}"><i class="fa-solid fa-arrow-left"></i></button>`:"",d=t!=e?`<button type="button" class="pagination_button pagination_button-arrow" data-page="${t+1}"><i class="fa-solid fa-arrow-right"></i></button>`:"",l='<button type="button" class="pagination_button" data-page="1">1</button>',s=`<button type="button" class="pagination_button" data-page="${e}">${e}</button>`,u='<button type="button" class="pagination_button pagination_button-points">...</button>';if(n<768){a+=i;for(let n=t-2;n<=t+2;n++)o=n,n!==t?n<=e&&n>0&&(a+=`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`):a+=`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=d}if(n>=768){if(e<=9){a+=i;for(let n=1;n<=e;n++)o=n,a+=n!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=d}if(e>=10){if(t<=5){a+=i;for(let e=1;e<=7;e++)o=e,a+=e!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=u+s+d}if(t>e-5){a+=i+l+u;for(let n=e-6;n<=e;n++)o=n,a+=n!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=d}if(t>5&&t<=e-5){a+=i+l+u;for(let e=t-2;e<=t+2;e++)o=e,a+=e!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=u+s+d}}}w.innerHTML=a}w.addEventListener("click",(t=>{"BUTTON"===t.target.nodeName&&function(t){document.body.scrollIntoView();const e=Number(t.dataset.page);""===l.default.searchParams.query?((0,s.spinnerPlay)(),l.default.getFilmsPopular(e).then((t=>{F(t.results)})).finally((()=>(0,s.spinnerStop)()))):((0,s.spinnerPlay)(),l.default.getFilmsSearched(l.default.searchParams.query,e).then((t=>{F(t.results)})).finally((()=>(0,s.spinnerStop)())))}(t.target)}));var $=i("epGcV");(0,s.spinnerPlay)(),l.default.getFilmsPopular().then((t=>{F(t.results)})).finally((()=>(0,s.spinnerStop)()));const q=document.querySelector(".gallery"),F=t=>{const a=t.map((({poster_path:t,original_title:a,genre_ids:n,release_date:o,id:i,vote_average:l})=>{let s,u=n.map($.default);return u.length>2&&(u=`${u[0]}, ${u[1]}, Other`),s=t?`https://image.tmdb.org/t/p/w500/${t}`:e(d),`<div class="film__card" data-id=${i}>\n        <a class="film__link link" href="" onclick="event.preventDefault()">\n          <img class="film__img" src=${s} alt="" data-id=${i} loading="lazy"/>\n          <div class="film__info">\n            <h3 class="film__title">\n              ${a}\n            </h3>\n            <div class="film__details">\n          <div class="film__genre">${u}</div>\n          <div class="film__year">${o.substr(0,4)}</div>\n          <div class="film__rating">${l.toFixed(1)}</div>\n          </div>\n          </div>\n        </a>\n      </div>`})).join("");q.innerHTML=a,L(l.default.page,l.default.total_pages)};q.addEventListener("click",(function({target:t}){if(t.classList.contains("gallery"))return;(0,s.spinnerPlay)();const e=t.closest("[data-id]").getAttribute("data-id");l.default.getFilmsById(e).then((t=>{b.showBackdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const e=h(t);b.modalDetail.innerHTML=e,u.default.currentlyOpenedFilm.filmData=t,(()=>{const e={closeModalBtn:document.querySelector(".modal-detail__cross-frame"),modalDetail:document.querySelector("[data-detail-modal]"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),buttonWatched:document.querySelector(".button-watched"),buttonQueue:document.querySelector(".button-queue"),youTubeBtn:document.querySelector(".modal-detail__youtube")};!async function({buttonWatched:t,buttonQueue:e,id:a}){const n=await u.default.searchFilmInCollection(a);n===r?(t.textContent="Remove from watched",t.dataset.action="delete",t.classList.add("button-active"),e.textContent="Add to queue",e.dataset.action="add",e.classList.remove("button-active")):n===m?(t.textContent="Add to watched",t.dataset.action="add",t.classList.remove("button-active"),e.textContent="Remove from queue",e.dataset.action="delete",e.classList.add("button-active")):(t.textContent="Add to watched",t.dataset.action="add",t.classList.remove("button-active"),e.textContent="Add to queue",e.dataset.action="add",e.classList.remove("button-active"))}({buttonWatched:e.buttonWatched,buttonQueue:e.buttonQueue,id:t.id}),async function({moviePoster:t,youTubeBtn:e}){const a=await async function(){const t=u.default.currentlyOpenedFilm.filmData.id,e=(await l.default.getMovieTrailer(t)).results.find((t=>"Trailer"===t.type));return null==e?void 0:e.key}();a&&(t.addEventListener("click",c.openModalTrailer),e.classList.remove("visually-hidden"),t.style.cursor="pointer",u.default.currentlyOpenedFilm.movieTrailerKey=a)}({moviePoster:e.moviePoster,youTubeBtn:e.youTubeBtn}),e.closeModalBtn.addEventListener("click",f),e.buttonWatched.addEventListener("click",y),e.buttonQueue.addEventListener("click",g)})()})).catch((t=>console.log(t))).finally((()=>{document.body.classList.add("modal-open"),document.addEventListener("keydown",_),b.modalDetailBackdrop.addEventListener("click",v),(0,s.spinnerStop)()}))}));s=i("1XX55");var S=i("iQIUW");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{searchQuery:e}}=t.currentTarget,a=e.value.trim().toLowerCase();""===a?((0,s.spinnerPlay)(),l.default.getFilmsPopular().then((t=>{F(t.results)})).finally((()=>(0,s.spinnerStop)()))):((0,s.spinnerPlay)(),l.default.getFilmsSearched(a).then((t=>{0===t.results.length&&S.Notify.failure("No movies found for your search!",{position:"center-center",background:"#ff001b",fontFamily:"Roboto"}),F(t.results)})).finally((()=>(0,s.spinnerStop)())))})),i("cpWOc"),i("311xP"),i("3hXKf"),i("h53OD"),i("7bYU0"),i("I2Abx"),i("kThre"),i("iB1XX");
//# sourceMappingURL=index.85ef37c3.js.map