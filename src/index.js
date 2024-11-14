import './styles.css';
import { homeBuilder } from './homeMaker.js';
import { movieFetch } from './api.js';
import { searchAPI } from './api.js';
import { watchlistBuilder } from './watchlist.js';
import {
  movieCardExpandedCreator,
  watchlistOrWatched,
} from './movieCardExpanded.js';
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
export let watchedOrList;

movieFetch();

home.addEventListener('click', () => {
  if (page === 'home') {
  } else if (page !== 'home') {
    page = 'home';
    watchedOrList = '';
    clearMainBody();
    homeBuilder();
  }
});

watchList.addEventListener('click', () => {
  if (page === 'watchlist') {
  } else if (page !== 'watchlist') {
    page = 'watchlist';
    clearMainBody();
    watchlistBuilder();
    watchedOrList = 'watched';
  }
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 'search';
  watchedOrList = '';
  clearMainBody();
  searchAPI(searchBar.value);
});

/////resets the main page
export function clearMainBody() {
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

///////used to get dataset title for movies, wherever i click it gives me the dataset title
document.addEventListener('click', (e) => {
  if (e.target.dataset.title !== undefined) {
    page = 'Movie Card';
    console.log(page);
    searchAPI(e.target.dataset.title);
    window.scrollTo(0, 0);
  }
});
