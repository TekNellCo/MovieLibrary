let genreID;

export function homeBuilder() {
  movieFetch();
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

/////populates containers with movie cards according to category and adds dataset title to them
function popularMovies(container) {
  for (let i = 0; i < movieLibrary.popular.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.popular[i].poster_path}`;
    let dataSetID = `${movieLibrary.popular[i].title}`;
    // console.log('product id');
    // console.log(movieLibrary.popular[i].id);
    // console.log(dataSetID);
    const movieCards = document.createElement('img');
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    // console.log('below is poster path');
    // console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary.popular[i].title}`;
  }
}

function top_rated(container) {
  for (let i = 0; i < movieLibrary.top_rated.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.top_rated[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.top_rated[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    // console.log('below is poster path');
    // console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary.top_rated[i].title}`;
  }
}

function action(container) {
  for (let i = 0; i < movieLibrary.action.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.action[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.action[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    // console.log('below is poster path');
    // console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary.action[i].title}`;
  }
}
function comedy(container) {
  for (let i = 0; i < movieLibrary.comedy.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.comedy[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.comedy[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    // console.log('below is poster path');
    // console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary.comedy[i].title}`;
  }
}
function drama(container) {
  for (let i = 0; i < movieLibrary.drama.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.drama[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.drama[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    // console.log('below is poster path');
    // console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary.drama[i].title}`;
  }
}
function horror(container) {
  for (let i = 0; i < movieLibrary.horror.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.horror[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.horror[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    // console.log('below is poster path');
    // console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary.horror[i].title}`;
  }
}
function romance(container) {
  for (let i = 0; i < movieLibrary.romance.length; ++i) {
    let url = `https://image.tmdb.org/t/p/w500${movieLibrary.romance[i].poster_path}`;
    const movieCards = document.createElement('img');
    let dataSetID = `${movieLibrary.romance[i].id}`;
    movieCards.classList.add('movieCard');
    container.append(movieCards);
    // console.log('below is poster path');
    // console.log(url);
    movieCards.src = `${url}`;

    movieCards.dataset.title = `${movieLibrary.romance[i].title}`;
  }
}
