/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');

    //     addForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //
    //     let newFilm = addInput.value;
    //     const favorite = checkBox.checked;
    //
    //     if (newFilm) {
    //
    //         if (newFilm.length > 21) {
    //             newFilm = `${newFilm.substring(0, 22)}...`;
    //         }
    //
    //         if (favorite) {
    //             alert('Добавили любимый фильм')
    //         }
    //
    //         movieDB.movies.push(newFilm);
    //         movieDB.movies.sort();
    //
    //         createMovieList(movieDB.movies, movieList);
    //     }
    //
    //     event.target.reset();
    // })

    // const deleteAdv = (arr) => {
    //     arr.forEach(item => {
    //         item.remove();
    //     });
    // };
    //
    // const makeChanges = () => {
    //     genre.textContent = 'драма';
    //     poster.style.backgroundImage = 'url(\'img/bg.jpg\')';
    // }
    //
    // const sortArray = (arr) => {
    //     arr.sort();
    // };
    //
    // function createMovieList(films,  parent) {
    //     parent.innerHTML = ""
    //     sortArray(films);
    //
    //     films.forEach((film, i) => {
    //         parent.innerHTML += `
    //     <li class="promo__interactive-item">${i + 1} ${film}
    //         <div class="delete"></div>
    //     </li>
    // `;
    //     })
    //
    //     document.querySelectorAll('.delete').forEach((btn, i) => {
    //         btn.addEventListener('click', () => {
    //             btn.parentElement.remove();
    //             movieDB.movies.splice(i, 1)
    //             createMovieList(films, parent);
    //         })
    //     })
    // }
    //
    // deleteAdv(adv);
    // makeChanges();
    // createMovieList(movieDB.movies, movieList);

    const btns = document.querySelectorAll('button');
    // console.log(btns[0].classList.length);
    // console.log(btns[0].classList.item(1));
    // console.log(btns[1].classList.add('red', 'dgyhusjamx'));
    // console.log(btns[1].classList.remove('blue'));
    // console.log(btns[0].classList.toggle('blue'));

    // if (btns[1].classList.contains('red')) {
    //     console.log('red')
    // }

    btns[1].addEventListener('click', () => {
        if (!btns[2].classList.contains('red')) {
            btns[2].classList.add('red');
        } else {
            btns[2].classList.remove('red');
        }
    });



})











