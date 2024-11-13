import { watchlistOrWatched } from './movieCardExpanded';
import { flexWrapBuilder } from '.';

export let movieMapWatchlist = new Map();

export function toggleMovieWatchlist(movie, watchListButton) {
  console.log('watchlist button', watchListButton);
  const movieKey = JSON.stringify(movie); // Create a unique key for the movie based on its content
  // Check if the movie is already in the Map
  if (movieMapWatchlist.has(movieKey)) {
    // If the movie exists, remove it
    movieMapWatchlist.delete(movieKey);
    watchListButton.style.cssText = 'background-color:chartreuse';
    watchListButton.textContent = 'Add to watchlist';
    console.log('Movie removed:', movie);
    movieWatchlistTest();
  } else {
    // If the movie does not exist, add it
    movieMapWatchlist.set(movieKey, movie); // Store the movie object as the value
    console.log('Movie added:', movie);
    watchListButton.style.cssText = 'background-color: grey';
    watchListButton.textContent = 'Remove from watchlist';
    movieWatchlistTest();
  }
}

//////runs through the watchlist to populate the new watchlist
function movieWatchlistTest() {
  movieMapWatchlist.forEach((movie) => {
    console.log('movie objects', movie);
  });
}
