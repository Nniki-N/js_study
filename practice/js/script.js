'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
          promoList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = document.querySelector('.adding__input'),
          Checkbox = document.querySelector('input[type="checkbox"]');
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        let newFilm = addInput.value;
        const favorite = Checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
    
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, promoList);

            e.target.reset();
        }
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = (genre, bg) => {
        genre.textContent = 'Драма';
        bg.style.cssText = 'background: url(img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList (films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        
        movieDB.movies.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            <li/>
            `;
        });  

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(promoAdv);
    makeChanges(promoGenre, promoBg);
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, promoList);
});