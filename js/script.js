'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const movie = prompt('Один из последних просмотренных фильмов?', ''),
      ocenka = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[movie] = ocenka;

console.log(personalMovieDB);
