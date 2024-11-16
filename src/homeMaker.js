import { movieFetch } from './api';
import { mainBody } from './index';
import { movieLibrary } from './api';

let genreID;

export async function homeBuilder() {
  await movieFetch();
  cloneContainer();
}

// #region [red]
///makes 7 carousel containers
export function cloneContainer() {
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

    //#region
    /////adds scrolling to browsers for carousel containers
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    carouselContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      isDragging = false; // Reset dragging flag
      startX = e.pageX - carouselContainer.offsetLeft;
      scrollLeft = carouselContainer.scrollLeft;
    });

    carouselContainer.addEventListener('mouseleave', () => {
      isDown = false;
    });

    carouselContainer.addEventListener('mouseup', () => {
      isDown = false;
    });

    carouselContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carouselContainer.offsetLeft;
      const walk = (x - startX) * 1; // Adjust scrolling speed
      carouselContainer.scrollLeft = scrollLeft - walk;

      // If the cursor moves significantly, mark it as dragging
      if (Math.abs(x - startX) > 5) {
        isDragging = true;
      }
    });

    // Suppress clicks if a drag occurred
    carouselContainer.addEventListener('click', (e) => {
      if (isDragging) {
        e.preventDefault(); // Cancel the click event
        e.stopImmediatePropagation(); // Stop the click from propagating
      }
    });

    //#endregion
  }
}
// endregion

/// sorts the importmation into different containers(divs)
export function containerSort(i, carouselContainer, newForYou) {
  let container = '';
  if (i === 0) {
    container = carouselContainer;
    newForYou.textContent = 'Popular Movies';
    populateContainers(container, 'popular');
  }
  if (i === 1) {
    container = carouselContainer;
    newForYou.textContent = 'Top Rated';
    populateContainers(container, 'top_rated');
    // console.log(container);
  }
  if (i === 2) {
    container = carouselContainer;
    newForYou.textContent = 'Action';
    populateContainers(container, 'action');
  }
  if (i === 3) {
    container = carouselContainer;
    newForYou.textContent = 'Comedy';
    populateContainers(container, 'comedy');
  }
  if (i === 4) {
    container = carouselContainer;
    newForYou.textContent = 'Drama';
    populateContainers(container, 'drama');
  }
  if (i === 5) {
    container = carouselContainer;
    newForYou.textContent = 'Horror';
    populateContainers(container, 'horror');
  }
  if (i === 6) {
    container = carouselContainer;
    newForYou.textContent = 'Romance';
    populateContainers(container, 'romance');
  }
}

////populates the container(div) images on the home page by category
function populateContainers(container, category) {
  for (let i = 0; i < movieLibrary[category].length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary[category][i].poster_path}`;
    let dataSetID = `${movieLibrary.popular[i].title}`;
    const movieCards = document.createElement('img');
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary[category][i].title}`;
  }
}
