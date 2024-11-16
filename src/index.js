import './styles.css';
import { homeBuilder } from './homeMaker.js';
import { movieFetch } from './api.js';
import { searchAPI } from './api.js';
import { watchlistBuilder } from './watchlist.js';
import { watchedBuilder } from './watched.js';
// import { themeToggle } from './theme.js';

let htmlDataset = document.documentElement;
export let verticalScroll;
export const mainBody = document.querySelector('.mainBody');
const home = document.querySelector('.home');
const watchList = document.querySelector('.watchList');
const watched = document.querySelector('.watched');
const searchBar = document.querySelector('.searchBar');
const searchForm = document.querySelector('.searchForm');
const themeBtn = document.querySelector('.theme');
export let state = {
  watchedOrList: '',
};

export let value = {
  watchedOrWatchlist: '',
};
export let activeNav;
////sets the status of the page
export let page = '';
//container for flexwrap so when its created i can pull the created element inside other functions
export let flexWrap;

movieFetch();

home.addEventListener('click', () => {
  if (page === 'home') {
  } else if (page !== 'home') {
    page = 'home';
    // watchedOrList = '';
    value.watchedOrWatchlist = '';
    clearMainBody();
    homeBuilder();
  }
});

watchList.addEventListener('click', () => {
  if (page === 'watchlist') {
  } else if (page !== 'watchlist') {
    page = 'watchlist';
    value.watchedOrWatchlist = 'watchlist';
    // watchedOrList = 'watchlist';
    clearMainBody();
    watchlistBuilder();
  }
});

watched.addEventListener('click', () => {
  if (page === 'watched') {
  } else if (page !== watched) {
    page = 'watched';
    value.watchedOrWatchlist = 'watched';
    // watchedOrList = 'watched';
    clearMainBody();
    watchedBuilder();
  }
});

//#region
themeBtn.addEventListener('click', () => {
  if (htmlDataset.dataset.theme === 'light') {
    htmlDataset.dataset.theme = 'dark';
  } else if (htmlDataset.dataset.theme === 'dark') {
    htmlDataset.dataset.theme = 'light';
  }
});
//#endregion
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 'search';
  value.watchedOrWatchlist;
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
  console.log('searchbar');
  e.target.select();
});

///////used to get dataset title for movies, wherever i click it gives me the dataset title
document.addEventListener('click', (e) => {
  if (e.target.dataset.title !== undefined) {
    page = 'Movie Card';
    console.log(page);
    searchAPI(e.target.dataset.title);
    verticalScroll = window.scrollY;
    // console.log('vertical scroll', verticalScroll);
  }
});

const navBar = document.querySelectorAll('.navIcons');
const navSVG = document.querySelectorAll('.svg');

navBar.forEach((button) => {
  button.addEventListener('click', () => {
    mainBody.style.cssText = 'overflow : scroll; height:auto';
    navSVG.forEach((svg) => {
      svg.classList.remove('activeButton');
    });
    let svgColor = button.childNodes[3];
    svgColor.classList.add('activeButton');
    console.log(button.childNodes[3]);
    activeNav = button.dataset.nav;
    // console.log(activeNav);
  });
});

// document.addEventListener('mousedown', function (e) {
//   e.preventDefault(); // This can block scrolling
// });
