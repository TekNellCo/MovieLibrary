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
import { activeNav } from '.';
import { verticalScroll } from '.';

export let watchlistOrWatched;

export async function movieCardExpandedCreator() {
  // console.log('page', page, 'watchedorwatchlist', value.watchedOrWatchlist);
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
  backButton.classList.add('btn');

  //region
  let isInWatchlist = false;

  movieMapWatchlist.forEach((movie) => {
    if (movie.title === searchResults[0].title) {
      isInWatchlist = true;
    }
  });
  if (isInWatchlist) {
    watchListButton.style.cssText =
      'background-color: var(--movie-card-button-color-inactive); color: var(--movie-card-button-text-inactive)';
    watchListButton.textContent = 'Remove from watchlist';
  } else {
    watchListButton.style.cssText =
      'background-color: var(--movie-card-button-color-active);color: var(--movie-card-button-text-active)';
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
    watchedButton.style.cssText =
      'background-color: var(--movie-card-button-color-inactive); color: var(--movie-card-button-text-inactive)';
    watchedButton.textContent = 'Remove from watched';
  } else {
    watchedButton.style.cssText =
      'background-color: var(--movie-card-button-color-active);color: var(--movie-card-button-text-active)';
    watchedButton.textContent = 'Add to watch';
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
  // movieInfo.append(genre);
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
    mainBody.style.cssText = 'overflow : scroll; height:auto';
    window.scrollTo(0, verticalScroll);
    if (value.watchedOrWatchlist === 'watchlist' && activeNav === 'watchlist') {
      clearMainBody();
      watchlistBuilder();
    } else if (
      value.watchedOrWatchlist === 'watched' &&
      activeNav === 'watched'
    ) {
      clearMainBody();
      watchedBuilder();
    } else {
      movieCardExpanded.remove();
    }
  });
  //region end
  //#region
  // backButton.addEventListener('click', () => {
  //   window.scrollTo(0, 0);
  //   mainBody.style.cssText = 'overflow : scroll; height:auto';
  //   if(activeNav === home){

  //   }
  // });
  //#endregion
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
////tahes the searched movie and turns it into an abject then pushes it into the respective list
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
