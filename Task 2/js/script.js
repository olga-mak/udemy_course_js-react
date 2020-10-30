"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

let numberOfFilms = 0;
let film = '';
let filmRate = 0;

while(true) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели","");
    if(numberOfFilms !== null && !isNaN(numberOfFilms) && numberOfFilms.length !== 0 && numberOfFilms !== '') {
        break;
    }
}  

personalMovieDB.count = numberOfFilms;

for(let i = 0; i< 2; i++) {
    
    while(true) {
        film = prompt("Один из последних просмотренных фильмов", "");
        if(film !== null && film.length !== 0 && film.length <= 50 && film !== '') {
            break;
        }       
    }  

    while(true) {
        filmRate = prompt("На сколько оцените его?", "");
        if(filmRate != null && !isNaN(filmRate) && filmRate.length !== 0 && filmRate !== '') {
            break;
        }
    }

    personalMovieDB.movies[film] = filmRate;    
}

if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if( personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}