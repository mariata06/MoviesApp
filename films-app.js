"use strict";

// 1) рефакторинг - переписать все созданные функции как методы объекта personalMovieDB
// записываем функцию start() - в метод объекта personalMovieDB
// записываем функцию rememberMyFilms() - в метод объекта personalMovieDB
// записываем функцию detectPersonalLevel() - в метод объекта personalMovieDB
// записываем функцию showMyDB() - в метод объекта personalMovieDB
// удаляем переменную let numberOfFilms - она больше не нужна и внутри объекта
// обращаемся к ней как personalMovieDB.count
// 2) рефакторинг - cоздать  метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. 
//Если оно свойство privat - false, переключает его в true, если true - переключает в false. 
//Протестировать вместе с showMyDB.
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/ 
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотели?", "");
  
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотели?", "");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("на сколько оцените его?", "");
        
      if (a == null || a == "" || a.length > 50 || b == null || b == "" || b.length > 50) {
        i--;
      } else {
        personalMovieDB.movies[a] = b;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("произошла ошибка");
    }
  },
  showMyDB: function() {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
  writeYourGenres: function() {
    for (let j = 1; j <= 3; j++) {
      let genre = prompt(`Ваш любимый жанр под номером ${j}`);
      if (genre == null || genre == "") {
        console.length("Вы ввели некорректные данные или не ввели их вовсе");
        j--;
      } else {
        personalMovieDB.genres[j - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach(function (genre, j) {
      console.log(`Любимый жанр # ${j + 1} - это ${genre}`);
    });
  }
};