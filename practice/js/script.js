'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт xfgxПилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoList = document.querySelector('.promo__interactive-list');

promoAdv.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Драма';

promoBg.style.cssText = 'background: url(img/bg.jpg)';

promoList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promoList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    <li/>
    `;
});