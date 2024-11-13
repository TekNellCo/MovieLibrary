import { mainBody } from '.';
import moviePoster from './images/movie_poster.jpg';

export function movieCardExpandedCreator(movieTitle, overview) {
  const movieCardExpanded = document.createElement('div');
  const posterContainer = document.createElement('div');
  const posterImage = document.createElement('img');
  const movieInfo = document.createElement('div');
  const title = document.createElement('h1');
  const genre = document.createElement('h2');
  const description = document.createElement('p');
  const watchListButton = document.createElement('button');
  const WatchedButton = document.createElement('button');

  posterImage.src = moviePoster;

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

  title.textContent = `${movieTitle}`;
  genre.textContent = 'Horror';
  description.textContent = `${overview}`;
  watchListButton.textContent = 'Watchlist';
  WatchedButton.textContent = 'Watched';
}
