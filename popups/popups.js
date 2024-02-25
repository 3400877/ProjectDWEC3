// We get all the buttons
const buttonAddMovie = document.getElementById("btn-add-movie");
const buttonDelMovie = document.getElementById("btn-del-movie");
const buttonMarkMovie = document.getElementById("btn-mark-movie");

// We get all the forms
const popupAddMovie = document.getElementById("popup-add-movie");
const popupDelMovie = document.getElementById("popup-del-movie");
const popupMarkMovie = document.getElementById("popup-mark-movie");

const toggleHidden = (e) => e.classList.toggle("hidden");

buttonAddMovie.addEventListener("click", () => toggleHidden(popupAddMovie));
buttonDelMovie.addEventListener("click", () => toggleHidden(popupDelMovie));
buttonMarkMovie.addEventListener("click", () => toggleHidden(popupMarkMovie));

import { addMovie, setMovieListDiv, watchMovie, removeMovie } from "../movielist.js";
import { date } from "../calendar.js";

const validateMovie = (title, director, dateStr, cast) =>
  title.length > 0 && director.length > 0 && (dateStr ?? undefined) && cast.some(actor => actor.length > 0);
;

// We implement the functionality
popupAddMovie.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const director = document.getElementById('director').value;
  const dateStr = document.getElementById('date').value;
  const cast = document.getElementById('cast').value.split(',');

  if (validateMovie(title, director, dateStr, cast)) {
    const movieDate = new Date(dateStr);
    const movie = {
      title: title,
      year: movieDate.getFullYear(),
      month: movieDate.getMonth() + 1,
      day: movieDate.getDate(),
      director: director,
      cast: cast
    };
    addMovie(movie);
    setMovieListDiv(date);
  } else {
    window.alert("There was an error receiving the data");
  }
});

popupMarkMovie.addEventListener("submit", (event) => {
  event.preventDefault();
  watchMovie(document.getElementById("watch-title").value);
});

popupDelMovie.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById('watch-title').value;
  removeMovie(title, date);
});