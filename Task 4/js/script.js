"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilms = 0;
        while(true) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");
            if(numberOfFilms !== null && !isNaN(numberOfFilms) && numberOfFilms.length !== 0 && numberOfFilms !== '') {
                break;
            }
        }  
        
        this.count = numberOfFilms;    
    },    
    inputFilm: function() {
        let film = '';
        while(true) {
            film = prompt("Один из последних просмотренных фильмов", "");
            if(film !== null && film.length !== 0 && film.length <= 50 && film !== '') {
                break;
            }       
        }  
        return film;
    },
    inputFilmRate: function() {
        let filmRate = 0;
        while(true) {
            filmRate = prompt("На сколько оцените его?", "");
            if(filmRate != null && !isNaN(filmRate) && filmRate.length !== 0 && filmRate !== '') {
                break;
            }
        }

        return filmRate;
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
    
            let film = this.inputFilm();
            let filmRate = this.inputFilmRate();   
        
            this.movies[film] = filmRate;    
        }
    },
    detectPersonalLevel: function() {
        if(this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            alert('Вы классический зритель');
        } else if( this.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
        for(let i = 0; i < 3; i++) {
            let genre = '';
            while(true){
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);    
                if(genre !== null && genre.length !== 0  && genre !== '') {
                    break;
                }
            }
    
            this.genres[i] = genre;    
        }

        this.genres.forEach((item, i) => { 
            console.log(`Любимый жанр #${i + 1}- это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        this.privat = this.privat === true ? false : true;
    },
    showMyDB: function() {
        if(this.privat === false) {
            console.log(this);
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();