!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n("9h1VZ"),n("cVYaS"),n("fJHat");var o=n("4Nugj"),r=n("bpxeT"),l=n("2TvXO"),s=n("2oYM3"),d=n("eQLRL"),c=(q=n("hRbC3")).default.tags,u=c.WATCHED,h=c.QUEUE,p=(c.NOT_ADDED,"add"),f="delete",v={body:document.querySelector("body"),showBackdrop:document.querySelector("[data-detail-modal]"),modalDetail:document.querySelector(".modal-detal__container"),closeModalBtn:document.querySelector(".modal-detail__cross-frame"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),modalDetailBackdrop:document.querySelector(".modal-detail__backdrop")};function g(){v.modalDetailBackdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",m),v.modalDetailBackdrop.removeEventListener("click",_),function(){y.apply(this,arguments)}()}function m(e){"Escape"===e.code&&g()}function _(e){e.target===v.modalDetailBackdrop&&g()}function y(){return(y=e(r)(e(l).mark((function t(){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,i=document.querySelector(".js-btn-watched"),a=i.classList.contains("library__btn--currenly")?u:h,e.next=6,q.default.getUserCollections().then((function(e){var t=null==e?void 0:e.filter((function(e){return e.tag===a}));t.length?C(t):v.filmGalleryLib.innerHTML=' <h2>There are no films in "Watched" collection"</h2>'})).catch((function(e){return console.log(e)}));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(1),console.log("on main page"),e.abrupt("return");case 12:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function b(){return(b=e(r)(e(l).mark((function t(a){var i,n,o,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.buttonWatched,n=a.buttonQueue,o=a.id,e.next=3,q.default.searchFilmInCollection(o);case 3:(r=e.sent)===u?(i.textContent="Remove from watched",i.dataset.action=f,i.classList.add("button-active"),n.textContent="Add to queue",n.dataset.action=p,n.classList.remove("button-active")):r===h?(i.textContent="Add to watched",i.dataset.action=p,i.classList.remove("button-active"),n.textContent="Remove from queue",n.dataset.action=f,n.classList.add("button-active")):(i.textContent="Add to watched",i.dataset.action=p,i.classList.remove("button-active"),n.textContent="Add to queue",n.dataset.action=p,n.classList.remove("button-active"));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=e(r)(e(l).mark((function t(a){var i,n,o,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a.target,document.querySelector(".modal-detal__container"),n=document.querySelector(".button-queue"),o=i.dataset.action,r=n.dataset.action,o!==p||r!==p){e.next=9;break}q.default.addFilmToCollection(u),i.dataset.action=f,i.textContent="Remove from watched",i.classList.add("button-active"),e.next=28;break;case 9:if(o!==p||r!==f){e.next=22;break}return e.next=12,q.default.deleteFilmFromCollection(q.default.currentlyOpenedFilm.filmData.id);case 12:return e.next=14,q.default.addFilmToCollection(u);case 14:i.dataset.action=f,i.textContent="Remove from watched",i.classList.add("button-active"),n.textContent="Add to queue",n.dataset.action=p,n.classList.remove("button-active"),e.next=28;break;case 22:if(o!==f){e.next=28;break}return e.next=25,q.default.deleteFilmFromCollection(q.default.currentlyOpenedFilm.filmData.id);case 25:i.dataset.action=p,i.textContent="Add to watched",i.classList.remove("button-active");case 28:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(e){return j.apply(this,arguments)}function j(){return(j=e(r)(e(l).mark((function t(a){var i,n,o,r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a.target,document.querySelector(".modal-detal__container"),n=document.querySelector(".button-watched"),o=n.dataset.action,(r=i.dataset.action)!==p||o!==p){e.next=9;break}q.default.addFilmToCollection(h),i.dataset.action=f,i.textContent="Remove from queue",i.classList.add("button-active"),e.next=28;break;case 9:if(r!==p||o!==f){e.next=22;break}return e.next=12,q.default.deleteFilmFromCollection(q.default.currentlyOpenedFilm.filmData.id);case 12:return e.next=14,q.default.addFilmToCollection(h);case 14:i.dataset.action=f,i.textContent="Remove from queue",i.classList.add("button-active"),n.textContent="Add to watched",n.dataset.action=p,n.classList.remove("button-active"),e.next=28;break;case 22:if(r!==f){e.next=28;break}return e.next=25,q.default.deleteFilmFromCollection(q.default.currentlyOpenedFilm.filmData.id);case 25:i.dataset.action=p,i.textContent="Add to queue",i.classList.remove("button-active");case 28:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var x=function(e){var t=e.id,a=e.poster_path,i=e.title,n=e.vote_average,o=e.vote_count,r=e.popularity,l=e.original_title,s=e.genres,d=e.overview;return' <div class="modal-detail__cross-frame">\n      <i class="fa-solid fa-xmark"></i>\n    </div>\n  <div class="movie-poster">\n  <img\n            class="movie-image" data-id="'.concat(t,'"\n            src="https://image.tmdb.org/t/p/w500/').concat(a,'"\n            alt=""\n          />\n               <div class="modal-detail__youtube" data-modal-youtube>\n      <i class="fa-brands fa-youtube"></i>\n    </div>\n          </div>\n           <div class="movie-data">\n          <h2 class="data__title">').concat(i,'</h2>\n          <ul class="data__list list">\n            <li class="list__item">\n              <p class="data__item">Vote / Votes\n              </p>\n              <p class="data__info">\n                <span class="data__span data__span--orange">').concat(n,'</span>\n                <span data__span--divider> / </span>\n                <span class="data__span">').concat(o,'</span>\n              </p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Popularity</p>\n              <p class="data__info">').concat(r,'</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Original Title</p>\n              <p class="data__info data__info--upper">').concat(l,'</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Genre</p>\n              <p class="data__info">').concat(s.map((function(e){return e.name})).join(", "),'</p>\n            </li>\n          </ul>\n          <p class="data__about">About</p>\n          <p class="data__about-text">').concat(d,'</p>\n  <div class="buttons">\n        <button\n          type="button"\n          class="modal-detail__button button-watched"\n          data-click="addToWached"\n          data-action="add"\n        >\n          Add to watched\n        </button>\n        <button\n          type="button"\n          data-action="add"\n          class="modal-detail__button button-queue"\n          data-click="addToQueue"\n        >\n          Add to queue\n        </button>\n      </div>\n    </div>')};o=n("4Nugj");JSON.parse('{"page":1,"results":[{"adult":false,"backdrop_path":"/lqtwpcqApnsNF9wS7PGmbHtqpix.jpg","id":49046,"title":"All Quiet on the Western Front","original_language":"de","original_title":"Im Westen nichts Neues","overview":"Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.","poster_path":"/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg","media_type":"movie","genre_ids":[28,18,36,10752],"popularity":81.845,"release_date":"2022-10-07","video":false,"vote_average":7.8,"vote_count":32},{"adult":false,"backdrop_path":"/bUjPcNS8GweBh5Nxp8oq9Dy712Z.jpg","id":913290,"title":"Barbarian","original_language":"en","original_title":"Barbarian","overview":"In town for a job interview, a young woman arrives at her Airbnb late at night only to find that it has been mistakenly double-booked and a strange man is already staying there. Against her better judgement, she decides to stay the night anyway, but soon discovers that there is much more to be afraid of in the house than the other guest.","poster_path":"/idT5mnqPcJgSkvpDX7pJffBzdVH.jpg","media_type":"movie","genre_ids":[27,9648,53],"popularity":527.701,"release_date":"2022-09-08","video":false,"vote_average":7.2,"vote_count":244},{"adult":false,"backdrop_path":"/x2U0R60Z7hmJxZixzsGZfjFJbve.jpg","id":541134,"title":"The Good Nurse","original_language":"en","original_title":"The Good Nurse","overview":"Suspicious that her colleague is responsible for a series of mysterious patient deaths, a nurse risks her own life to uncover the truth in this gripping thriller based on true events.","poster_path":"/rSq6cq0LCcbro10jbEaPTEb3WmW.jpg","media_type":"movie","genre_ids":[18,80,9648],"popularity":104.972,"release_date":"2022-10-19","video":false,"vote_average":7.25,"vote_count":90},{"adult":false,"backdrop_path":"/oKqsZr4Jq1Y3fPZ0ufgzUs2ToK2.jpg","id":532870,"title":"Run Sweetheart Run","original_language":"en","original_title":"Run Sweetheart Run","overview":"Initially apprehensive when her boss insists she meet with one of his most important clients, single mom Cherie is relieved and excited when she meets charismatic Ethan. The influential businessman defies expectations and sweeps Cherie off her feet. But at the end of the night, when the two are alone together, he reveals his true, violent nature. Battered and terrified, she flees for her life, beginning a relentless game of cat-and-mouse with a bloodthirsty assailant hell-bent on her utter destruction. In this edge-of-your-seat dark thriller, Cherie finds herself in the crosshairs of a conspiracy stranger and more evil than she could have ever imagined.","poster_path":"/hgep5jT30HJwqfJVNCoPuRzlF.jpg","media_type":"movie","genre_ids":[53,9648,27],"popularity":11.343,"release_date":"2022-10-28","video":false,"vote_average":6.5,"vote_count":6},{"adult":false,"backdrop_path":"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","id":436270,"title":"Black Adam","original_language":"en","original_title":"Black Adam","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","poster_path":"/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg","media_type":"movie","genre_ids":[28,878,14],"popularity":3835.264,"release_date":"2022-10-19","video":false,"vote_average":7.1,"vote_count":594},{"adult":false,"backdrop_path":"/v3Mc67AUN77h0BR9GymiPs4x96H.jpg","id":511817,"title":"Wendell & Wild","original_language":"en","original_title":"Wendell & Wild","overview":"Two demon brothers enlist the aid of Kat Elliot — a tough teen with a load of guilt — to summon them to the Land of the Living. But what Kat demands in return leads to a brilliantly bizarre and comedic adventure like no other.","poster_path":"/5dsX6UAHqkQz1kiV8bs8SvjyVNa.jpg","media_type":"movie","genre_ids":[16,35,14,12],"popularity":34.226,"release_date":"2022-10-21","video":false,"vote_average":8.5,"vote_count":3},{"adult":false,"backdrop_path":"/4O9kFXsBjlxtgzXWHfgMS9CjhbN.jpg","id":619730,"title":"Don\'t Worry Darling","original_language":"en","original_title":"Don\'t Worry Darling","overview":"Alice and Jack are lucky to be living in the idealized community of Victory, the experimental company town housing the men who work for the top-secret Victory Project and their families. But when cracks in their idyllic life begin to appear, exposing flashes of something much more sinister lurking beneath the attractive façade, Alice can’t help questioning exactly what they’re doing in Victory, and why.","poster_path":"/jOqxKIOC92BVyinYO1Fm73XY7Tc.jpg","media_type":"movie","genre_ids":[53,9648,18],"popularity":984.728,"release_date":"2022-09-21","video":false,"vote_average":6.89,"vote_count":589},{"adult":false,"backdrop_path":"/xXSjMjCdZ6v7NIFvsSMNqe4ySkF.jpg","id":1032950,"title":"Hellhole","original_language":"pl","original_title":"Ostatnia Wieczerza","overview":"In a monastery cut off from the world, the monks run a clinic for the possessed. One day, a young policeman Marek comes to the convent. Posing as a clergyman, he penetrates monastic life and tries to explain the recent, mysterious disappearance of several tormented inmates. It turns out, however, that there is no way out of the monastery.","poster_path":"/y47wBamj9vdqBeGaLEFTrYEPTeC.jpg","media_type":"movie","genre_ids":[27],"popularity":76.426,"release_date":"2022-10-26","video":false,"vote_average":6.885,"vote_count":27},{"adult":false,"backdrop_path":"/ulyR4pWVMRtVcanoassVbmgfEPT.jpg","id":800939,"title":"Ticket to Paradise","original_language":"en","original_title":"Ticket to Paradise","overview":"A divorced couple teams up and travels to Bali to stop their daughter from making the same mistake they think they made 25 years ago.","poster_path":"/1tzERH50P5c2mFWtLbgixzLZS1L.jpg","media_type":"movie","genre_ids":[35,10749],"popularity":186.699,"release_date":"2022-09-08","video":false,"vote_average":6.832,"vote_count":152},{"adult":false,"backdrop_path":"/jvulRWEbRnDpUx0UUBB42IuTe87.jpg","id":873125,"title":"Robbing Mussolini","original_language":"it","original_title":"Rapiniamo il Duce","overview":"At the end of WWII, a black marketeer and a nightclub singer put together a ragtag bunch of misfits to carry out an impossible heist: to steal Mussolini\'s treasure right from his headquarters.","poster_path":"/cbdHqb0kZTgF7jQbUw41KEYVInb.jpg","media_type":"movie","genre_ids":[28,12,35,80,10752],"popularity":17.884,"release_date":"2022-10-26","video":false,"vote_average":5.929,"vote_count":35},{"adult":false,"backdrop_path":"/jv3UA95sQZkJYRVFsoGoxy3ixcL.jpg","id":962232,"title":"Beyond the Universe","original_language":"pt","original_title":"Depois do Universo","overview":"While waiting for a kidney transplant, a young pianist finds an unexpected connection with her doctor — and the courage to fulfill her musical dreams.","poster_path":"/uWsAh49dkyFe2tNTtIoqq6IdiBq.jpg","media_type":"movie","genre_ids":[10749,18,35],"popularity":47.144,"release_date":"2022-10-27","video":false,"vote_average":7.367,"vote_count":15},{"adult":false,"backdrop_path":"/akYTfFvYkFGJReFxXM841NidlAa.jpg","id":1033107,"title":"Wild Is the Wind","original_language":"en","original_title":"Wild Is the Wind","overview":"When two corrupt police officers investigate the brutal murder of a young girl, tensions come to a head in their small, racially-segregated town.","poster_path":"/fMpeA7d6yk18maGMJ3fSkjKp4z6.jpg","media_type":"movie","genre_ids":[80,18],"popularity":46.659,"release_date":"2022-10-28","video":false,"vote_average":5.7,"vote_count":3},{"adult":false,"backdrop_path":"/y5Z0WesTjvn59jP6yo459eUsbli.jpg","id":663712,"title":"Terrifier 2","original_language":"en","original_title":"Terrifier 2","overview":"After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art\'s evil intent.","poster_path":"/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg","media_type":"movie","genre_ids":[27,53],"popularity":5162.285,"release_date":"2022-10-06","video":false,"vote_average":7.412,"vote_count":182},{"adult":false,"backdrop_path":"/oxUG1YVKDXz8GqC57LuhZHLVscf.jpg","id":949423,"title":"Pearl","original_language":"en","original_title":"Pearl","overview":"Trapped on her family’s isolated farm, Pearl must tend to her ailing father under the bitter and overbearing watch of her devout mother. Lusting for a glamorous life like she’s seen in the movies, Pearl’s ambitions, temptations and repressions collide.","poster_path":"/ulBLIBqvdnf4H6JBt0OpMCU1ECn.jpg","media_type":"movie","genre_ids":[27,9648,53,35],"popularity":212.484,"release_date":"2022-09-16","video":false,"vote_average":6.99,"vote_count":102},{"adult":false,"backdrop_path":"/rKMnvM9wh14XJabEL8AHhW2sZxZ.jpg","id":760204,"title":"The Lair","original_language":"en","original_title":"The Lair","overview":"Royal Air Force pilot Lt. Kate Sinclair is on her final flight mission when her jet is shot down over one of the most dangerous rebel strongholds in Afghanistan. She finds refuge in an abandoned underground bunker where deadly man-made creatures known as Ravagers — half-human, half-alien, and hungry for human flesh — are awakened.","poster_path":"/ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg","media_type":"movie","genre_ids":[28,27],"popularity":9.59,"release_date":"2022-08-25","video":false,"vote_average":4.8,"vote_count":6},{"adult":false,"backdrop_path":"/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg","id":718930,"title":"Bullet Train","original_language":"en","original_title":"Bullet Train","overview":"Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug\'s latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world\'s fastest train.","poster_path":"/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg","media_type":"movie","genre_ids":[28,35,53],"popularity":1696.55,"release_date":"2022-07-03","video":false,"vote_average":7.52,"vote_count":2042},{"adult":false,"backdrop_path":"/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg","id":760161,"title":"Orphan: First Kill","original_language":"en","original_title":"Orphan: First Kill","overview":"After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.","poster_path":"/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg","media_type":"movie","genre_ids":[27,53],"popularity":1865.482,"release_date":"2022-07-27","video":false,"vote_average":6.779,"vote_count":1150},{"adult":false,"backdrop_path":"/5yW2BjqjTLTvJqQ7dRJjiDu9oEL.jpg","id":1026822,"title":"Cici","original_language":"tr","original_title":"Cici","overview":"A family migrates to the city after a tragic loss. When they reunite in their hometown 30 years later, buried emotions and painful secrets resurface.","poster_path":"/hzB4hGHkW4NGnjhqTSyTj9AbgGO.jpg","media_type":"movie","genre_ids":[18],"popularity":50.936,"release_date":"2022-10-27","video":false,"vote_average":6.2,"vote_count":5},{"adult":false,"backdrop_path":"/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg","id":505642,"title":"Black Panther: Wakanda Forever","original_language":"en","original_title":"Black Panther: Wakanda Forever","overview":"Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.","poster_path":"/sv1xJUazXeYqALzczSZ3O6nkH75.jpg","media_type":"movie","genre_ids":[28,12,878],"popularity":434.182,"release_date":"2022-11-09","video":false,"vote_average":0,"vote_count":0},{"adult":false,"backdrop_path":"/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg","id":361743,"title":"Top Gun: Maverick","original_language":"en","original_title":"Top Gun: Maverick","overview":"After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.","poster_path":"/62HCnUTziyWcpDaBO2i1DX17ljH.jpg","media_type":"movie","genre_ids":[28,18],"popularity":827.169,"release_date":"2022-05-24","video":false,"vote_average":8.351,"vote_count":4462}],"total_pages":1000,"total_results":20000}');var q=n("hRbC3"),T=(d=n("eQLRL"),q.default.tags),B=T.WATCHED,W=(T.QUEUE,T.NOT_ADDED,function(e){o.default.filmGalleryLib.innerHTML=" ";var t=e.map((function(e){var t=e.poster_path,a=e.original_title,i=e.genre_ids,n=e.release_date,o=e.id,r=e.vote_average;return'<div class="film__card" data-id='.concat(o,'>\n            <a class="film__link link" href="" onclick="event.preventDefault()">\n            <img class="film__img" src="https://image.tmdb.org/t/p/w500/').concat(t,'" alt="" loading="lazy" />\n            <div class="film__info">\n                <h3 class="film__title">\n                ').concat(a,'\n                </h3>\n                <div class="film__details">\n            <div class="film__genre">').concat(i,'</div>\n            <div class="film__year">').concat(n.substr(0,4),'</div>\n            <div class="film__rating">').concat(r.toFixed(1),"</div>\n            </div>\n            </div>\n            </a>\n        </div>")})).join("");o.default.filmGalleryLib.innerHTML=t});(0,d.spinnerPlay)(),q.default.getUserCollections().then((function(e){var t=null==e?void 0:e.filter((function(e){return e.tag===B}));o.default.wachedBtn.classList.add("library__btn--currenly"),o.default.queueBtn.classList.remove("library__btn--currenly"),t?t.length?W(t):o.default.filmGalleryLib.innerHTML=' <h2>There are no films in "Watched" collection"</h2>':o.default.filmGalleryLib.innerHTML=" <h2>Please login to viewe personal collections</h2>"})).catch((function(e){if("No_USER"===e.message)return o.default.wachedBtn.classList.add("disabled"),o.default.queueBtn.classList.add("disabled"),void(o.default.filmGalleryLib.innerHTML=" <h2>Please login to viewe personal collections</h2>")})).finally((function(){return(0,d.spinnerStop)()})),o.default.filmGalleryLib.addEventListener("click",(function(e){var t=e.target;if(!t.classList.contains("gallery")){(0,d.spinnerPlay)();var a=t.closest("[data-id]").getAttribute("data-id");this.id="",s.default.getFilmsById(a).then((function(e){v.showBackdrop.classList.remove("is-hidden");var t,a=x(e);v.modalDetail.innerHTML=a,q.default.currentlyOpenedFilm.filmData=e,function(e){b.apply(this,arguments)}({buttonWatched:(t={closeModalBtn:document.querySelector(".modal-detail__cross-frame"),modalDetail:document.querySelector("[data-detail-modal]"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),buttonWatched:document.querySelector(".button-watched"),buttonQueue:document.querySelector(".button-queue")}).buttonWatched,buttonQueue:t.buttonQueue,id:e.id}),t.closeModalBtn.addEventListener("click",g),t.buttonWatched.addEventListener("click",w),t.buttonQueue.addEventListener("click",L)})).catch((function(e){return console.log(e)})).finally((function(){document.body.classList.add("modal-open"),document.addEventListener("keydown",m),v.modalDetailBackdrop.addEventListener("click",_),(0,d.spinnerStop)()}))}}));var C=W,A=(q=n("hRbC3")).default.tags,F=A.WATCHED,D=A.QUEUE;A.NOT_ADDED;o.default.wachedBtn.addEventListener("click",(function(){q.default.getUserCollections().then((function(e){var t=null==e?void 0:e.filter((function(e){return e.tag===F}));o.default.wachedBtn.classList.add("library__btn--currenly"),o.default.queueBtn.classList.remove("library__btn--currenly"),(null==t?void 0:t.length)?W(t):o.default.filmGalleryLib.innerHTML=' <h2>There are no films in "Watched" collection"</h2>'})).catch((function(e){}))})),o.default.queueBtn.addEventListener("click",(function(){q.default.getUserCollections().then((function(e){var t=null==e?void 0:e.filter((function(e){return e.tag===D}));o.default.wachedBtn.classList.remove("library__btn--currenly"),o.default.queueBtn.classList.add("library__btn--currenly"),(null==t?void 0:t.length)?W(t):o.default.filmGalleryLib.innerHTML=' <h2>There are no films in "Queue" collection"</h2>'})).catch((function(e){}))})),n("XJkyI"),n("your5"),n("fDiVl"),n("ghI91"),n("aZhHc"),n("ijwS8"),n("2NTPx"),n("2oYM3")}();
//# sourceMappingURL=library.be9e4592.js.map