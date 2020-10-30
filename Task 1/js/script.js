"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

const firstFilm = prompt("Один из последних просмотренных фильмов", "");
const firstFilmRate = prompt("На сколько оцените его?", "");
const secondFilm = prompt("Один из последних просмотренных фильмов", "");
const secondFilmRate = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstFilm] = firstFilmRate;
personalMovieDB.movies[secondFilm] = secondFilmRate;

console.log(personalMovieDB);