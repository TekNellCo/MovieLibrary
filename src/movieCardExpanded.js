import { value } from '.';
import { mainBody, state } from '.';
import moviePoster from './images/movie_poster.jpg';
import { searchResults } from './api';
import { page } from '.';
import { toggleMovieWatchlist, watchlistBuilder } from './watchlist';
import { movieMapWatchlist } from './watchlist';
import { clearMainBody } from '.';
import { movieMapWatched, watchedBuilder } from './watched';
import { toggleMovieWatched } from './watched';

export let watchlistOrWatched;

export async function movieCardExpandedCreator() {
  console.log('page', page, 'watchedorwatchlist', value.watchedOrWatchlist);
  if (page === 'Movie Card') {
    mainBody.style.cssText = 'overflow : hidden; height:60rem';
  }
  //   console.log('single search result', searchResults);
  let poster_image = searchResults[0].backdrop_path;
  let movie_title = searchResults[0].title;
  let movie_description = searchResults[0].overview;

  const backButton = document.createElement('button');
  const movieCardExpanded = document.createElement('div');
  const posterContainer = document.createElement('div');
  const posterImage = document.createElement('img');
  const movieInfo = document.createElement('div');
  const title = document.createElement('h1');
  const genre = document.createElement('h2');
  const description = document.createElement('p');
  const watchListButton = document.createElement('button');
  const watchedButton = document.createElement('button');

  if (
    searchResults[0].backdrop_path == null ||
    searchResults[0].backdrop_path == undefined ||
    searchResults[0].backdrop_path == ''
  ) {
    posterImage.src = `https://image.tmdb.org/t/p/w500${searchResults[0].poster_path}`;
  } else {
    posterImage.src = `https://image.tmdb.org/t/p/w500${poster_image}`;
  }

  watchListButton.textContent = 'Add to watchlist';
  watchedButton.textContent = 'Watched';

  watchListButton.classList.add('watchListButton', 'btn');
  watchedButton.classList.add('WatchedButton', 'btn');

  //region
  let isInWatchlist = false;

  movieMapWatchlist.forEach((movie) => {
    if (movie.title === searchResults[0].title) {
      isInWatchlist = true;
    }
  });
  if (isInWatchlist) {
    watchListButton.style.cssText = 'background-color: grey';
    watchListButton.textContent = 'Remove from watchlist';
  } else {
    watchListButton.style.cssText = 'background-color: chartreuse';
    watchListButton.textContent = 'Add to watchlist';
  }

  //end region
  //region
  let isInWatched = false;

  movieMapWatched.forEach((movie) => {
    if (movie.title === searchResults[0].title) {
      isInWatched = true;
    }
  });
  if (isInWatched) {
    watchedButton.style.cssText = 'background-color: grey';
    watchedButton.textContent = 'Remove from watchlist';
  } else {
    watchedButton.style.cssText = 'background-color: chartreuse';
    watchedButton.textContent = 'Add to watchlist';
  }
  //end region
  backButton.classList.add('backButton');
  movieCardExpanded.classList.add('movieCardExpanded');
  posterContainer.classList.add('posterContainer');
  posterImage.classList.add('posterImage');
  movieInfo.classList.add('movieInfo');
  title.classList.add('title');
  genre.classList.add('genre');
  description.classList.add('description');

  mainBody.append(movieCardExpanded);
  movieCardExpanded.append(posterContainer);
  posterContainer.append(posterImage);
  posterContainer.append(movieInfo);
  movieInfo.append(title);
  movieInfo.append(genre);
  movieInfo.append(description);
  movieInfo.append(watchListButton);
  movieInfo.append(watchedButton);
  movieInfo.append(backButton);

  backButton.textContent = 'Back';
  title.textContent = `${movie_title}`;
  genre.textContent = 'Horror';
  description.textContent = `${movie_description}`;
  //region #red
  backButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
    if (value.watchedOrWatchlist === 'watchlist') {
      clearMainBody();
      watchlistBuilder();
    } else if (value.watchedOrWatchlist === 'watched') {
      clearMainBody();
      watchedBuilder();
    } else {
      movieCardExpanded.remove();
    }
    mainBody.style.cssText = 'overflow : scroll; height:auto';
  });
  //region end
  watchListButton.addEventListener('click', () => {
    value.watchedOrWatchlist = 'watchlist';
    movieObjectCreator(searchResults, watchListButton);

    console.log('IT WORKS 2A', movieMapWatchlist);
  });
  watchedButton.addEventListener('click', () => {
    value.watchedOrWatchlist = 'watched';
    movieObjectCreator(searchResults, watchedButton);
    console.log('IT WORKS 2B', movieMapWatched);
  });
}
///////////////////////////////////////////////////////

//region
export function movieObjectCreator(searchResults, listButton) {
  console.log('HEY SEARCH RESULTS', searchResults);

  let watchObject = {
    title: searchResults[0].title,
    backdrop_path: searchResults[0].backdrop_path,
    poster_path: searchResults[0].poster_path,
    overview: searchResults[0].overview,
  };
  if (value.watchedOrWatchlist === 'watchlist') {
    console.log('IT WORKS 3A', movieMapWatchlist);
    toggleMovieWatchlist(watchObject, listButton);
  } else if (value.watchedOrWatchlist === 'watched') {
    console.log('IT WORKS 3B', movieMapWatched);
    toggleMovieWatched(watchObject, listButton);
  }
  //   console.log(watchObject);
}
//end region
// Test data
// let movie1 = { title: 'Movie 1', year: 2023 };
// let movie2 = { title: 'Movie 2', year: 2021 };
// let movie3 = { title: 'Movie 3', year: 2022 };
// let movie4 = { title: 'Movie 1', year: 2023 }; // Same content as movie1
// // Adding movies to the Map
// toggleMovie(movie1); // Movie added
// toggleMovie(movie2); // Movie added
// toggleMovie(movie3); // Movie added
// // Trying to add a duplicate (movie4, which is the same as movie1)
// toggleMovie(movie4); // Movie removed (toggle behavior)
// console.log(movieMap); // Map should only contain movie2 and movie3 now
// // Accessing movies in the Map:
// for (let [key, movie] of movieMap) {
//   console.log('Movie in map:', movie);
// }
