function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=a.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},a.parcelRequired7c6=i),i.register("kyEFX",(function(e,a){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)i[e[a]]=t[e[a]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.b28ea0fb.js","b6EE6":"file_not_found.886b5e99.jpg","b9auz":"index.85a1a342.js"}')),i("dldQF"),i("1wOgB"),i("lcy31");var d=i("iB1XX"),l=(d=i("iB1XX"),d=i("iB1XX"),i("1XX55")),s=i("jkUgE"),c=i("I2Abx");const{WATCHED:u,QUEUE:r,NOT_ADDED:m}=s.default.tags,p={body:document.querySelector("body"),showBackdrop:document.querySelector("[data-detail-modal]"),modalDetail:document.querySelector(".modal-detal__container"),closeModalBtn:document.querySelector(".modal-detail__cross-frame"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),modalDetailBackdrop:document.querySelector(".modal-detail__backdrop"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".pagination")};function b(){p.modalDetailBackdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",f),p.modalDetailBackdrop.removeEventListener("click",_)}function f(t){"Escape"===t.code&&b()}function _(t){t.target===p.modalDetailBackdrop&&b()}async function v({target:t}){document.querySelector(".modal-detal__container");const e=document.querySelector(".button-queue"),a=t.dataset.action,n=e.dataset.action;if("add"===a&&"add"===n)try{await s.default.addFilmToCollection(u),t.dataset.action="delete",t.textContent="Remove from watched",t.classList.add("button-active")}catch(t){}else"add"===a&&"delete"===n?(await s.default.deleteFilmFromCollection(s.default.currentlyOpenedFilm.filmData.id),await s.default.addFilmToCollection(u),t.dataset.action="delete",t.textContent="Remove from watched",t.classList.add("button-active"),e.textContent="Add to queue",e.dataset.action="add",e.classList.remove("button-active")):"delete"===a&&(await s.default.deleteFilmFromCollection(s.default.currentlyOpenedFilm.filmData.id),t.dataset.action="add",t.textContent="Add to watched",t.classList.remove("button-active"))}async function y({target:t}){document.querySelector(".modal-detal__container");const e=document.querySelector(".button-watched"),a=e.dataset.action,n=t.dataset.action;if("add"===n&&"add"===a)try{await s.default.addFilmToCollection(r),t.dataset.action="delete",t.textContent="Remove from queue",t.classList.add("button-active")}catch(t){}else if("add"===n&&"delete"===a){await s.default.deleteFilmFromCollection(s.default.currentlyOpenedFilm.filmData.id);try{await s.default.addFilmToCollection(r),t.dataset.action="delete",t.textContent="Remove from queue",t.classList.add("button-active"),e.textContent="Add to watched",e.dataset.action="add",e.classList.remove("button-active")}catch(t){}}else"delete"===n&&(await s.default.deleteFilmFromCollection(s.default.currentlyOpenedFilm.filmData.id),t.dataset.action="add",t.textContent="Add to queue",t.classList.remove("button-active"))}const g=({id:t,poster_path:e,title:a,vote_average:n,vote_count:o,popularity:i,original_title:d,genres:l,overview:s})=>` <div class="modal-detail__cross-frame">\n      <i class="fa-solid fa-xmark"></i>\n    </div>\n  <div class="movie-poster">\n  <img\n            class="movie-image" data-id="${t}"\n            src="https://image.tmdb.org/t/p/w500/${e}"\n            alt=""\n          />\n          <div class="modal-detail__youtube" data-modal-youtube>\n      <i class="fa-brands fa-youtube"></i>\n    </div>\n          </div>\n           <div class="movie-data">\n          <h2 class="data__title">${a}</h2>\n          <ul class="data__list list">\n            <li class="list__item">\n              <p class="data__item">Vote / Votes\n              </p>\n              <p class="data__info">\n                <span class="data__span data__span--orange">${n}</span>\n                <span data__span--divider> / </span>\n                <span class="data__span">${o}</span>\n              </p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Popularity</p>\n              <p class="data__info">${i}</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Original Title</p>\n              <p class="data__info data__info--upper">${d}</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Genre</p>\n              <p class="data__info">${l.map((t=>t.name)).join(", ")}</p>\n            </li>\n          </ul>\n          <p class="data__about">About</p>\n          <p class="data__about-text">${s}</p>\n  <div class="buttons">\n        <button\n          type="button"\n          class="modal-detail__button button-watched"\n          data-click="addToWached"\n          data-action="add"\n        >\n          Add to watched\n        </button>\n        <button\n          type="button"\n          data-action="add"\n          class="modal-detail__button button-queue"\n          data-click="addToQueue"\n        >\n          Add to queue\n        </button>\n      </div>\n    </div>`;l=i("1XX55"),d=i("iB1XX"),l=i("1XX55");const h=document.querySelector(".pagination");function w(t,e){if(0===e||1===e)return void(h.innerHTML="");let a="";const n=document.documentElement.scrollWidth;let o="",i=1!=t?`<button type="button" class="pagination_button pagination_button-arrow" data-page="${t-1}"><i class="fa-solid fa-arrow-left"></i></button>`:"",d=t!=e?`<button type="button" class="pagination_button pagination_button-arrow" data-page="${t+1}"><i class="fa-solid fa-arrow-right"></i></button>`:"",l='<button type="button" class="pagination_button" data-page="1">1</button>',s=`<button type="button" class="pagination_button" data-page="${e}">${e}</button>`,c='<button type="button" class="pagination_button pagination_button-points">...</button>';if(n<768){a+=i;for(let n=t-2;n<=t+2;n++)o=n,n!==t?n<=e&&n>0&&(a+=`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`):a+=`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=d}if(n>=768){if(e<=9){a+=i;for(let n=1;n<=e;n++)o=n,a+=n!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=d}if(e>=10){if(t<=5){a+=i;for(let e=1;e<=7;e++)o=e,a+=e!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=c+s+d}if(t>e-5){a+=i+l+c;for(let n=e-6;n<=e;n++)o=n,a+=n!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=d}if(t>5&&t<=e-5){a+=i+l+c;for(let e=t-2;e<=t+2;e++)o=e,a+=e!==t?`<button type="button" class="pagination_button" data-page="${o}">${o}</button>`:`<button type="button" class="pagination_button pagination_button-active">${o}</button>`;a+=c+s+d}}}h.innerHTML=a}h.addEventListener("click",(t=>{"BUTTON"===t.target.nodeName&&function(t){document.body.scrollIntoView();const e=Number(t.dataset.page);""===d.default.searchParams.query?((0,l.spinnerPlay)(),d.default.getFilmsPopular(e).then((t=>{S(t.results)})).finally((()=>(0,l.spinnerStop)()))):((0,l.spinnerPlay)(),d.default.getFilmsSearched(d.default.searchParams.query,e).then((t=>{S(t.results)})).finally((()=>(0,l.spinnerStop)())))}(t.target)}));const L=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var $,q=t=>L.find((e=>e.id===t)).name;$=new URL(i("kyEFX").resolve("b6EE6"),import.meta.url).toString(),(0,l.spinnerPlay)(),d.default.getFilmsPopular().then((t=>{S(t.results)})).finally((()=>(0,l.spinnerStop)()));const F=document.querySelector(".gallery"),S=t=>{const a=t.map((({poster_path:t,original_title:a,genre_ids:n,release_date:o,id:i,vote_average:d})=>{let l,s=n.map(q);return s.length>2&&(s=`${s[0]}, ${s[1]}, Other`),l=t?`https://image.tmdb.org/t/p/w500/${t}`:e($),`<div class="film__card" data-id=${i}>\n        <a class="film__link link" href="" onclick="event.preventDefault()">\n          <img class="film__img" src=${l} alt="" data-id=${i} loading="lazy"/>\n          <div class="film__info">\n            <h3 class="film__title">\n              ${a}\n            </h3>\n            <div class="film__details">\n          <div class="film__genre">${s}</div>\n          <div class="film__year">${o.substr(0,4)}</div>\n          <div class="film__rating">${d.toFixed(1)}</div>\n          </div>\n          </div>\n        </a>\n      </div>`})).join("");F.innerHTML=a,w(d.default.page,d.default.total_pages)};F.addEventListener("click",(function({target:t}){if(t.classList.contains("gallery"))return;(0,l.spinnerPlay)();const e=t.closest("[data-id]").getAttribute("data-id");d.default.getFilmsById(e).then((t=>{p.showBackdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");const e=g(t);p.modalDetail.innerHTML=e,s.default.currentlyOpenedFilm.filmData=t,(()=>{const e={closeModalBtn:document.querySelector(".modal-detail__cross-frame"),modalDetail:document.querySelector("[data-detail-modal]"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),buttonWatched:document.querySelector(".button-watched"),buttonQueue:document.querySelector(".button-queue")};!async function({buttonWatched:t,buttonQueue:e,id:a}){const n=await s.default.searchFilmInCollection(a);n===u?(t.textContent="Remove from watched",t.dataset.action="delete",t.classList.add("button-active"),e.textContent="Add to queue",e.dataset.action="add",e.classList.remove("button-active")):n===r?(t.textContent="Add to watched",t.dataset.action="add",t.classList.remove("button-active"),e.textContent="Remove from queue",e.dataset.action="delete",e.classList.add("button-active")):(t.textContent="Add to watched",t.dataset.action="add",t.classList.remove("button-active"),e.textContent="Add to queue",e.dataset.action="add",e.classList.remove("button-active"))}({buttonWatched:e.buttonWatched,buttonQueue:e.buttonQueue,id:t.id}),e.closeModalBtn.addEventListener("click",b),e.buttonWatched.addEventListener("click",v),e.buttonQueue.addEventListener("click",y),e.moviePoster.addEventListener("click",c.openModalTrailer)})()})).catch((t=>console.log(t))).finally((()=>{document.body.classList.add("modal-open"),document.addEventListener("keydown",f),p.modalDetailBackdrop.addEventListener("click",_),(0,l.spinnerStop)()}))}));l=i("1XX55");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{searchQuery:e}}=t.currentTarget,a=e.value.trim().toLowerCase();a?((0,l.spinnerPlay)(),d.default.getFilmsSearched(a).then((t=>{S(t.results)})).finally((()=>(0,l.spinnerStop)()))):((0,l.spinnerPlay)(),d.default.getFilmsPopular().then((t=>{S(t.results)})).finally((()=>(0,l.spinnerStop)())))})),i("cpWOc"),i("311xP"),i("3hXKf"),i("h53OD"),i("7bYU0"),i("I2Abx"),i("kThre"),i("iB1XX");
//# sourceMappingURL=index.b28ea0fb.js.map