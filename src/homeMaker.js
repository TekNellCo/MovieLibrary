import { movieFetch } from './api';
import { mainBody } from './index';
import { carouselPopular } from './api';

let genreID;

export function homeBuilder() {
  movieFetch();
  cloneContainer();
}

// #region [red]
///clones carousel containers
function cloneContainer() {
  let genreID = -1;

  for (let i = 0; i < 9; ++i) {
    const newForYou = document.createElement('h1');
    const carouselContainer = document.createElement('div');

    genreID++;

    newForYou.textContent = 'New for you';
    carouselContainer.classList.add(`carouselContainer`, `${genreID}`);
    mainBody.append(newForYou);
    mainBody.append(carouselContainer);
    containerSort(i, carouselContainer);
  }
}
// endregion

/// sorts the cards into different containers
export function containerSort(i, carouselContainer) {
  let container = '';
  if (i === 0) {
    container = carouselContainer;
  }
  if (i === 1) {
    container = carouselContainer;
    popularMovies(container);
    console.log(container);
  }
  if (i === 2) {
    container = carouselContainer;
  }
  if (i === 3) {
    container = carouselContainer;
  }
  if (i === 4) {
    container = carouselContainer;
  }
  if (i === 5) {
    container = carouselContainer;
  }
  if (i === 6) {
    container = carouselContainer;
  }
  if (i === 7) {
    container = carouselContainer;
  }
  if (i === 8) {
    container = carouselContainer;
  }
}

function popularMovies(container) {
  for (let i = 0; i < carouselPopular.length; ++i) {
    const movieCards = document.createElement('img');
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    console.log(carouselPopular[i].poster);
    movieCards.src = carouselPopular[i].poster;
  }
}

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
