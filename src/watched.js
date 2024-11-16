import { flexWrap, flexWrapBuilder } from '.';
import { mainBody } from '.';

export let movieMapWatched = new Map();

//////manipulates toggle button colors and text depending if on if its in the map
export function toggleMovieWatched(movie, watchedButton) {
  console.log('watchled button', watchedButton);
  const movieKey = JSON.stringify(movie); // Create a unique key for the movie based on its content
  // Check if the movie is already in the Map
  if (movieMapWatched.has(movieKey)) {
    // If the movie exists, remove it
    movieMapWatched.delete(movieKey);
    watchedButton.style.cssText =
      'background-color: var(--movie-card-button-color-active);color: var(--movie-card-button-text-active)';
    watchedButton.textContent = 'Add to watched';
    console.log('Movie removed:', movie);
  } else {
    // If the movie does not exist, add it
    movieMapWatched.set(movieKey, movie); // Store the movie object as the value
    console.log('Movie added:', movie);
    watchedButton.style.cssText =
      'background-color: var(--movie-card-button-color-inactive); color: var(--movie-card-button-text-inactive)';
    watchedButton.textContent = 'Remove from watched';
  }
}

/////creates a poster image for each title in the watched and appends a data ID to it
export function watchedBuilder() {
  let header = document.createElement('div');
  header.classList.add('watchOrListHeader');
  header.textContent = 'Watched';
  mainBody.append(header);

  flexWrapBuilder();

  movieMapWatched.forEach((movie) => {
    let movie_poster = movie.poster_path;
    let movie_data_name = movie.title;
    console.log('movie poster path', movie_poster, movie_data_name);
    let poster_image = document.createElement('img');
    poster_image.classList.add('flexCard');
    poster_image.dataset.title = movie_data_name;
    poster_image.src = `https://image.tmdb.org/t/p/w500${movie_poster}`;
    flexWrap.append(poster_image);
  });
  console.log('IT WORKS 1B');
}
