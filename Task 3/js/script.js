"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

function start() {
    let numberOfFilms = 0;
    while(true) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");
        if(numberOfFilms !== null && !isNaN(numberOfFilms) && numberOfFilms.length !== 0 && numberOfFilms !== '') {
            break;
        }
    }  
    
    personalMovieDB.count = numberOfFilms;    
}

function inputFilm(){
    let film = '';
    while(true) {
        film = prompt("Один из последних просмотренных фильмов", "");
        if(film !== null && film.length !== 0 && film.length <= 50 && film !== '') {
            break;
        }       
    }  
    return film;
}

function inputFilmRate()
{
    let filmRate = 0;
    while(true) {
        filmRate = prompt("На сколько оцените его?", "");
        if(filmRate != null && !isNaN(filmRate) && filmRate.length !== 0 && filmRate !== '') {
            break;
        }
    }

    return filmRate;
}

function rememberMyFilms(){
    for(let i = 0; i < 2; i++) {
    
        let film = inputFilm();
        let filmRate = inputFilmRate();   
    
        personalMovieDB.movies[film] = filmRate;    
    }
}

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if( personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function showMyDB(obj) {
    if(obj.privat === false) {
        console.log(obj);
    }
}

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        let genre = '';
        while(true){
            genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);    
            if(genre !== null && genre.length !== 0  && genre !== '') {
                break;
            }
        }

        personalMovieDB.genres[i] = genre;    
    }
 }

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB);