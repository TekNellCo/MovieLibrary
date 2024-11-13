import './styles.css';
import { homeBuilder } from './homeMaker.js';
import { movieFetch } from './api.js';
import { searchAPI } from './api.js';
import { searchResultsLoop } from './search.js';

export const mainBody = document.querySelector('.mainBody');
const home = document.querySelector('.home');
const watchList = document.querySelector('.watchList');
const searchBar = document.querySelector('.searchBar');
const searchButton = document.querySelector('.searchButton');

////sets the status of the page
export let page = '';
export let flexWrap;

movieFetch();
// homeBuilder();

home.addEventListener('click', () => {
  if (page === 'home') {
  } else if (page !== 'home') {
    page = 'home';
    clearMainBody();
    homeBuilder();
  }
});

watchList.addEventListener('click', () => {
  if (page === 'watchList') {
  } else if (page !== 'watchList') {
    page = 'watchlist';
    clearMainBody();
    console.log('watchlist');
  }
});

searchButton.addEventListener('click', () => {
  page = 'search';
  clearMainBody();
  searchAPI();
  flexWrapBuilder();
});

/////resets the main page
function clearMainBody() {
  mainBody.innerHTML = '';
}

/////creates a flexwrap for search/watchlist/and watched
export function flexWrapBuilder() {
  flexWrap = document.createElement('div');
  flexWrap.classList.add('flexWrap');
  mainBody.append(flexWrap);
  if (page === 'search') {
    console.log(flexWrap);
    // console.log('it works', flexWrap)
  }
}
