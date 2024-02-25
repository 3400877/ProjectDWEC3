import { moviesJsonString, moviesJsonString2, moviesJsonString3 } from "./utils/movies.js";

import { groupBy } from "./utils/group-by.js";


const movieList = [];

const addMovie = (movie) => movieList.push(movie);

const removeMovie = (title, date) => {
  const index = movieList.findIndex(m => m.title === title);
		if (index !== -1) {
			movieList.splice(index, 1);
      setMovieListDiv(date);
		}
};

const addMovies = (movies) => movies.forEach(movie => {
  addMovie(movie);
});

const addMovieJson = (movieJson) => {
  addMovies(JSON.parse(movieJson).movies);
};

const setMovieListDiv = (date) => {
  const movieListDiv = document.getElementById("movie-list");
  const newMovieListDiv = document.createElement('div');
  newMovieListDiv.id = "movie-list";
  // Filter list of movies in a month
  const filteredMovieList = movieList.filter(movie => movie.month == date.month);

  // We group those movies by the day
  const groupedMovieList = groupBy(filteredMovieList);
  console.log(Object.entries(groupedMovieList));
  Object.entries(groupedMovieList).forEach(([day, movies]) => {
    // Create a div for each day
    const dayDiv = document.createElement('div');

    // Add the date to the div
    const dayTitle = document.createElement('h2');
    dayTitle.textContent = date.set({day: day}).toFormat('MMM d, yyyy');
    dayDiv.appendChild(dayTitle);

    movies.forEach(movie => {
      // Create a div for each movie
      const movieDiv = document.createElement('div');
      movieDiv.classList.add("movie");
      if (movie.watched) {
        movieDiv.classList.add("watched");
      }

      // Add the title of the movie
      const movieTitle = document.createElement('h3');
      movieTitle.textContent = movie.title;
      movieDiv.appendChild(movieTitle);

      // Add the movie director to the div
      const movieDirector = document.createElement('p');
      movieDirector.textContent = `Director: ${movie.director}`;
      movieDiv.appendChild(movieDirector);

      // Create a new div for the cast
      const castDiv = document.createElement('div');

      // Loop through each actor in the cast array
      movie.cast.forEach(actor => {
        // Add the actor to the cast div
        const castMember = document.createElement('p');
        castMember.textContent = actor;
        castDiv.appendChild(castMember);
      });

      // Add the cast div to the movie div
      movieDiv.appendChild(castDiv);

      // Now, we append the movie div to the day div
      dayDiv.append(movieDiv);
    });

    newMovieListDiv.appendChild(dayDiv);
  });
  movieListDiv.replaceWith(newMovieListDiv);
};


const watchMovie = (title) => {
  const movieElements = document.querySelectorAll(".movie > h3");
  for (const movieElement of movieElements) {
    if (title == movieElement.textContent) {
      movieElement.parentElement.classList.toggle("watched");
    }
  }
}

addMovieJson(moviesJsonString);
addMovieJson(moviesJsonString2);
addMovieJson(moviesJsonString3);

export { setMovieListDiv, addMovie, watchMovie, removeMovie };