import { mainBody } from '.';
import moviePoster from './images/movie_poster.jpg';
import { searchResults } from './api';
import { page } from '.';

const body = document.body;

export async function movieCardExpandedCreator() {
  if (page === 'Movie Card') {
    // body.style.overflow = 'hidden';
  }
  console.log('single search result', searchResults);
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

  posterImage.src = `https://image.tmdb.org/t/p/w500${poster_image}`;

  backButton.classList.add('backButton');
  movieCardExpanded.classList.add('movieCardExpanded');
  posterContainer.classList.add('posterContainer');
  posterImage.classList.add('posterImage');
  movieInfo.classList.add('movieInfo');
  title.classList.add('title');
  genre.classList.add('genre');
  description.classList.add('description');
  watchListButton.classList.add('watchListButton', 'btn');
  WatchedButton.classList.add('WatchedButton', 'btn');

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
  watchListButton.textContent = 'Watchlist';
  WatchedButton.textContent = 'Watched';
  backButton.addEventListener('click', () => {
    movieCardExpanded.remove();
    body.style.overflow = 'scroll';
  });
}
