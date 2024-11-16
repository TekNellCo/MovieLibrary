import { flexWrap, flexWrapBuilder } from '.';
import { mainBody } from '.';

//#region
export let movieMapWatched = new Map();

//#endregion
//#region
export function toggleMovieWatched(movie, watchedButton) {
  console.log('watched button', watchedButton);

  // pull the watched movies list from localStorage or make an empty array
  let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];

  // Check if the movie is already in the watched list (using its unique ID or a key property)
  const movieExists = watchedMovies.some(
    (storedMovie) => storedMovie.title === movie.title
  );

  if (movieExists) {
    // Remove the movie if it exists
    watchedMovies = watchedMovies.filter(
      (storedMovie) => storedMovie.title !== movie.title
    );
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    watchedButton.style.cssText =
      'background-color: var(--movie-card-button-color-active); color: var(--movie-card-button-text-active)';
    watchedButton.textContent = 'Add to watched';
    console.log('Movie removed from watched:', movie);
  } else {
    // Add the movie if it doesn't exist
    watchedMovies.push(movie);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    watchedButton.style.cssText =
      'background-color: var(--movie-card-button-color-inactive); color: var(--movie-card-button-text-inactive)';
    watchedButton.textContent = 'Remove from watched';
    console.log('Movie added to watched:', movie);
  }
}

//#endregion
/////creates a poster image for each title in the watched and appends a data ID to it
export function watchedBuilder() {
  let header = document.createElement('div');
  header.classList.add('watchOrListHeader');
  header.textContent = 'Watched';
  mainBody.append(header);

  flexWrapBuilder();

  getWatchedMovies();
}

export function getWatchedMovies() {
  const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  for (let i = 0; i < watchedMovies.length; i++) {
    console.log('watched movies storage', watchedMovies[i].title);
    let movie_poster = watchedMovies[i].poster_path;
    let movie_data_name = watchedMovies[i].title;
    let poster_image = document.createElement('img');
    poster_image.classList.add('flexCard');
    poster_image.dataset.title = movie_data_name;
    poster_image.src = `https://image.tmdb.org/t/p/w500${movie_poster}`;
    flexWrap.append(poster_image);
    // });
  }
}
