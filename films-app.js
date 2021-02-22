"use strict";

// 1) Первую часть задания повторить по уроку - переписать то же самое в функциях
let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("на сколько оцените его?", "");
      
    if (a == null || a == "" || a.length > 50 || b == null || b == "" || b.length > 50) {
      i--;
    } else {
      personalMovieDB.movies[a] = b;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено слишком мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("произошла ошибка");
  }
}

//detectPersonalLevel();

console.log(personalMovieDB);

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

//showMyDB();

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
function writeYourGenres() {
  for (let j = 1; j <= 3; j++) {
    //const genre = prompt(`Ваш любимый жанр под номером ${j}`);
    //personalMovieDB.genres[j - 1] = genre;
    //2 предыдущие строки можно записать в одну(вместо создания каждый раз новой переменной genres в цикле):
    personalMovieDB.genres[j - 1] = prompt(`Ваш любимый жанр под номером ${j}`);
  }
}

writeYourGenres();