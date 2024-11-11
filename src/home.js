import { mainBody } from './index';
import { movieObjectMaker } from './api';

///tags to be placed as classes on created elements
// let genreID = 0;

////builds the homescreen layout
// export function homeBuilder() {
//   cloneContainer();
// }
//#region [red]
/////clones carousel containers
// function cloneContainer() {
//   genreID = 0;

//   for (let i = 0; i < 9; ++i) {
//     const newForYou = document.createElement('h1');
//     const carouselContainer = document.createElement('div');

//     genreID++;

//     newForYou.textContent = 'New for you';
//     carouselContainer.classList.add(`carouselContainer`, `${genreID}`);
//     mainBody.append(newForYou);
//     mainBody.append(carouselContainer);
//     containerSort(i, carouselContainer);
//   }
// }
//endregion

/////creates featured cards for first container
// function cloneFeaturedCard(firstContainer) {
//   for (let i = 0; i < 10; ++i) {
//     let featuredCard = document.createElement('div');
//     featuredCard.classList.add('featuredCard');
//     firstContainer.append(featuredCard);
//   }
// }
//#region [red]
///creates movie cards for non-featured containers
// function genreContainer(carouselContainer) {
//   for (let i = 0; i < 10; ++i) {
//     const movieCards = document.createElement('div');
//     movieCards.classList.add('movieCard');
//     carouselContainer.append(movieCards);
//   }
// }
//#endregion

///// sorts the cards into different containers
// export function containerSort(i, carouselContainer) {
//   let container = '';
//   if (i === 0) {
//     container = carouselContainer;
//     cloneFeaturedCard(container);
//   }
//   if (i === 1) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
//   if (i === 2) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
//   if (i === 3) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
//   if (i === 4) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
//   if (i === 5) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
//   if (i === 6) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
//   if (i === 7) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
//   if (i === 8) {
//     container = carouselContainer;
//     genreContainer(carouselContainer);
//   }
// }

// export function genreContainer(i,name) {
//   for (let i = 0; i < 10; ++i) {
//     const movieCards = document.createElement('div');
//     movieCards.classList.add('movieCard');
//     carouselContainer.append(movieCards);
//   console.log(name.name);
// }
