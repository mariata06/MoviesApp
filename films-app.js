"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// Автоматизировать вопросы пользователю про фильмы при помощи цикла
for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("на сколько оцените его?", "");
// Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
//отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
//возвращаем пользователя к вопросам опять        
  if (a == null || a == "" || a.length > 50 || b == null || b == "" || b.length > 50) {
    i--;
  } else {
    personalMovieDB.movies[a] = b;
  }
}
//При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
//"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
//"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
if (personalMovieDB.count < 10) {
  console.log("Просмотрено слишком мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("произошла ошибка");
}

console.log("personalMovieDB");