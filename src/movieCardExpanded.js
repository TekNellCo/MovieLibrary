import { mainBody } from '.';
import moviePoster from './images/movie_poster.jpg';
import { searchResults } from './api';
import { page } from '.';
import { toggleMovieWatchlist, watchlistBuilder } from './watchlist';
import { movieMapWatchlist } from './watchlist';
import { watchedOrList } from '.';
import { clearMainBody } from '.';

export let watchlistOrWatched;

export async function movieCardExpandedCreator() {
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
  const WatchedButton = document.createElement('button');

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
  WatchedButton.textContent = 'Watched';

  watchListButton.classList.add('watchListButton', 'btn');
  WatchedButton.classList.add('WatchedButton', 'btn');

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

  //   //   console.log('search results title', searchResults[0].title);
  //   movieMapWatchlist.forEach((movie, key) => {
  //     console.log('movie title', movie.title, 'key', key);
  //     console.log('each movie is', movie);

  //     if (movie.title === searchResults[0].title) {
  //       watchListButton.style.cssText = 'background-color: grey';
  //       watchListButton.textContent = 'Remove from watchlist';
  //       console.log('TITLES MATCH');
  //       console.log(
  //         `watchlist title is ${movie.title}`,
  //         `search result is ${searchResults[0].title}`
  //       );
  //     } else if (movie.title !== searchResults[0].title) {
  //       watchListButton.style.cssText = 'background-color:chartreuse';
  //       watchListButton.textContent = 'Add to watchlist';
  //       console.log(
  //         `watchlist title is ${movie.title}`,
  //         `search result is ${searchResults[0].title}`
  //       );
  //     }
  //   });

  //region end

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
  movieInfo.append(WatchedButton);
  movieInfo.append(backButton);

  backButton.textContent = 'Back';
  title.textContent = `${movie_title}`;
  genre.textContent = 'Horror';
  description.textContent = `${movie_description}`;
  //region #red
  backButton.addEventListener('click', () => {
    movieCardExpanded.remove();
    mainBody.style.cssText = 'overflow : scroll; height:auto';
    if (watchedOrList === 'watched') {
      clearMainBody();
      watchlistBuilder();
    }
  });
  //region end
  watchListButton.addEventListener('click', () => {
    movieObjectCreator(searchResults, watchListButton);
    // let watchObject = {
    //   title: searchResults[0].title,
    //   backdrop_path: searchResults[0].backdrop_path,
    //   poster_path: searchResults[0].poster_path,
    //   overview: searchResults[0].overview,
    // };

    // console.log('watchlist object', watchObject);
    // watchlistArray.push(watchObject);
    // console.log('watchlist array', watchlistArray);
    // if (watchlistArray.includes(searchResults[0])) {
    //   return;
    // } else {
    //   watchlistArray.push(searchResults[0]);
    // }
    // console.log(watchlistArray);
  });
}
///////////////////////////////////////////////////////

export function movieObjectCreator(searchResults, watchListButton) {
  //   console.log('HEY SEARCH RESULTS', searchResults);
  let watchObject = {
    title: searchResults[0].title,
    backdrop_path: searchResults[0].backdrop_path,
    poster_path: searchResults[0].poster_path,
    overview: searchResults[0].overview,
  };
  toggleMovieWatchlist(watchObject, watchListButton);
  //   console.log(watchObject);
}

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
