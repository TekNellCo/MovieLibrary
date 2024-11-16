import { flexWrap, flexWrapBuilder } from '.';
import { mainBody } from '.';

export let movieMapWatchlist = new Map();

//#region
export function toggleMovieWatchlist(movie, watchListButton) {
  // pull the watched movies list from localStorage or make an  array
  let watchlistMovies =
    JSON.parse(localStorage.getItem('watchlistMovies')) || [];

  // Check if the movie is already in the watched list (using its unique ID or a key property)
  const movieExists = watchlistMovies.some(
    (storedMovie) => storedMovie.title === movie.title
  );

  if (movieExists) {
    // Remove the movie if it exists
    watchlistMovies = watchlistMovies.filter(
      (storedMovie) => storedMovie.title !== movie.title
    );
    localStorage.setItem('watchlistMovies', JSON.stringify(watchlistMovies));
    watchListButton.style.cssText =
      'background-color: var(--movie-card-button-color-active); color: var(--movie-card-button-text-active)';
    watchListButton.textContent = 'Add to watchlist';
    console.log('Movie removed from watchlist:', movie);
  } else {
    // Add the movie if it doesn't exist
    watchlistMovies.push(movie);
    localStorage.setItem('watchlistMovies', JSON.stringify(watchlistMovies));
    watchListButton.style.cssText =
      'background-color: var(--movie-card-button-color-inactive); color: var(--movie-card-button-text-inactive)';
    watchListButton.textContent = 'Remove from watchlist';
    console.log('Movie added to watchlist:', movie);
  }
}
//#endregion

/////creates a poster image for each title in the watchlist and appends a data ID to it
export function watchlistBuilder() {
  let header = document.createElement('div');
  header.classList.add('watchOrListHeader');
  header.textContent = 'Watchlist';
  mainBody.append(header);

  flexWrapBuilder();
  getWatchedMovies();
}
export function getWatchedMovies() {
  const watchlistMovies =
    JSON.parse(localStorage.getItem('watchlistMovies')) || [];
  for (let i = 0; i < watchlistMovies.length; i++) {
    console.log('watched movies storage', watchlistMovies[i].title);
    let movie_poster = watchlistMovies[i].poster_path;
    let movie_data_name = watchlistMovies[i].title;
    let poster_image = document.createElement('img');
    poster_image.classList.add('flexCard');
    poster_image.dataset.title = movie_data_name;
    poster_image.src = `https://image.tmdb.org/t/p/w500${movie_poster}`;
    flexWrap.append(poster_image);
  }
}
