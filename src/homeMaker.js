import { movieFetch } from './api';
import { mainBody } from './index';
import { carouselPopular } from './api';
import { movieLibrary } from './api';

let genreID;

export function homeBuilder() {
  movieFetch();
  cloneContainer();
}

// #region [red]
///makes 7 carousel containers
function cloneContainer() {
  let genreID = -1;

  for (let i = 0; i < 7; ++i) {
    const newForYou = document.createElement('h1');
    const carouselContainer = document.createElement('div');

    /////number class for containers
    genreID++;

    // newForYou.textContent = 'New for you';
    carouselContainer.classList.add(`carouselContainer`, `${genreID}`);
    mainBody.append(newForYou);
    mainBody.append(carouselContainer);
    //////runs the containersorter  while passing in the container class
    containerSort(i, carouselContainer, newForYou);
  }
}
// endregion

/// sorts the cards into different containers
export function containerSort(i, carouselContainer, newForYou) {
  let container = '';
  if (i === 0) {
    container = carouselContainer;
    newForYou.textContent = 'Popular Movies';
    popularMovies(container);
  }
  if (i === 1) {
    container = carouselContainer;
    newForYou.textContent = 'Top Rated';
    top_rated(container);
    // console.log(container);
  }
  if (i === 2) {
    container = carouselContainer;
    newForYou.textContent = 'Action';
    action(container);
  }
  if (i === 3) {
    container = carouselContainer;
    newForYou.textContent = 'Comedy';
    comedy(container);
  }
  if (i === 4) {
    container = carouselContainer;
    newForYou.textContent = 'Drama';
    drama(container);
  }
  if (i === 5) {
    container = carouselContainer;
    newForYou.textContent = 'Horror';
    horror(container);
  }
  if (i === 6) {
    container = carouselContainer;
    newForYou.textContent = 'Romance';
    romance(container);
  }
}

/////populates containers with movie cards according to category
function popularMovies(container) {
  for (let i = 0; i < movieLibrary.popular.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.popular[i].poster_path}`;
    let dataSetID = `${movieLibrary.popular[i].id}`;
    console.log('product id');
    // console.log(movieLibrary.popular[i].id);
    console.log(dataSetID);
    const movieCards = document.createElement('img');
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log('below is poster path');
    console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.id = `${dataSetID}`;
  }
}

function top_rated(container) {
  for (let i = 0; i < movieLibrary.top_rated.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.top_rated[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.top_rated[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log('below is poster path');
    console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.id = `${dataSetID}`;
  }
}

function action(container) {
  for (let i = 0; i < movieLibrary.action.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.action[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.action[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log('below is poster path');
    console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.id = `${dataSetID}`;
  }
}
function comedy(container) {
  for (let i = 0; i < movieLibrary.comedy.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.comedy[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.comedy[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log('below is poster path');
    console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.id = `${dataSetID}`;
  }
}
function drama(container) {
  for (let i = 0; i < movieLibrary.drama.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.drama[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.drama[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log('below is poster path');
    console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.id = `${dataSetID}`;
  }
}
function horror(container) {
  for (let i = 0; i < movieLibrary.horror.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.horror[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.horror[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log('below is poster path');
    console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.id = `${dataSetID}`;
  }
}
function romance(container) {
  for (let i = 0; i < movieLibrary.romance.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.romance[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.romance[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log('below is poster path');
    console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.id = `${dataSetID}`;
  }
}
// function clearPopularArray() {
//   carouselPopular = [];
// }

// export function genreContainer(i, name) {
//   for (let i = 0; i < 10; ++i) {
//     const movieCards = document.createElement('div');
//     movieCards.classList.add('movieCard');
//     carouselContainer.append(movieCards);
//     console.log(name.name);
//   }
// }

// export function cloneContainer(movie) {
//     const newForYou = document.createElement('h1');
//     const carouselContainer = document.createElement('div');
//     newForYou.textContent = 'New for you';
//     carouselContainer.classList.add(`carouselContainer`, `${i}`);
//     mainBody.append(newForYou);
//     mainBody.append(carouselContainer);
//   console.log(movie);
// }

///////////creates carousels on home page
// export function cloneCarouselContainer(movie) {
//   const newForYou = document.createElement('h1');
//   newForYou.textContent = 'New for you';
//   const carouselContainer = document.createElement('div');
//   carouselContainer.classList.add(`carouselContainer`);
//   mainBody.append(newForYou);
//   mainBody.append(carouselContainer);

//   movieCards(movie, carouselContainer);
// }

//////adds posters to carousels
// function movieCards(movie, carouselContainer) {
//   const movieCards = document.createElement('img');
//   movieCards.src = `${movie.poster}`;
//   movieCards.classList.add('movieCard');
//   carouselContainer.append(movieCards);
// }

// let posterPath = `${response.results[0].poster_path}`;

// let url = `https://image.tmdb.org/t/p/w500${response.results[i].poster_path}`;
// let imagePost = document.createElement('img');
// imagePost.classList.add('test');
// imagePost.src = `${url}`;
// imageContainer.append(imagePost);
