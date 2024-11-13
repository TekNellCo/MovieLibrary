import './styles.css';
import { homeBuilder } from './homeMaker.js';
import { movieFetch } from './api.js';
import { searchAPI } from './api.js';
import { movieCardExpandedCreator } from './movieCardExpanded.js';
import { searchResultsLoop } from './search.js';

export const mainBody = document.querySelector('.mainBody');
const home = document.querySelector('.home');
const watchList = document.querySelector('.watchList');
const searchBar = document.querySelector('.searchBar');
const searchForm = document.querySelector('.searchForm');

////sets the status of the page
export let page = '';
//container for flexwrap so when its created i can pull the created element inside other functions
export let flexWrap;

movieFetch();

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
    movieCardExpandedCreator();
    console.log('watchlist');
  }
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 'search';
  clearMainBody();
  searchAPI(searchBar.value);
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
}

//////When search bar is clicked it highlights all the text
searchBar.addEventListener('focus', (e) => {
  e.target.select();
});
