import { watchlistOrWatched } from './movieCardExpanded';
import { flexWrap, flexWrapBuilder } from '.';
import { mainBody } from '.';

export let movieMapWatchlist = new Map();

//////manipulates toggle button colors and text depending if on if its in the map
export function toggleMovieWatchlist(movie, watchListButton) {
  //   console.log('watchlist button', watchListButton);
  const movieKey = JSON.stringify(movie); // Create a unique key for the movie based on its content
  // Check if the movie is already in the Map
  if (movieMapWatchlist.has(movieKey)) {
    // If the movie exists, remove it
    movieMapWatchlist.delete(movieKey);
    watchListButton.style.cssText = 'background-color:chartreuse';
    watchListButton.textContent = 'Add to watchlist';
    console.log('Movie removed:', movie);
    // movieWatchlistTest();
  } else {
    // If the movie does not exist, add it
    movieMapWatchlist.set(movieKey, movie); // Store the movie object as the value
    console.log('Movie added:', movie);
    watchListButton.style.cssText = 'background-color: grey';
    watchListButton.textContent = 'Remove from watchlist';
    // movieWatchlistTest();
  }
}

//////runs through the watchlist to populate the new watchlist
// function movieWatchlistTest() {
//   movieMapWatchlist.forEach((movie) => {
//     console.log('movie objects', movie);
//   });
// }

/////creates a poster image for each title in the watchlist and appends a data ID to it
export function watchlistBuilder() {
  let header = document.createElement('div');
  header.classList.add('watchOrListHeader');
  header.textContent = 'Watchlist';
  mainBody.append(header);

  flexWrapBuilder();

  movieMapWatchlist.forEach((movie) => {
    let movie_poster = movie.poster_path;
    let movie_data_name = movie.title;
    console.log('movie poster path', movie_poster, movie_data_name);
    let poster_image = document.createElement('img');
    poster_image.classList.add('flexCard');
    poster_image.dataset.title = movie_data_name;
    poster_image.src = `https://image.tmdb.org/t/p/w500${movie_poster}`;

    flexWrap.append(poster_image);
  });
  console.log('IT WORKS 1A');
}
