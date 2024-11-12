import './styles.css';
import { homeBuilder } from './homeMaker.js';
import { movieFetch } from './api.js';
import { searchAPI } from './api.js';

export const mainBody = document.querySelector('.mainBody');
const home = document.querySelector('.home');
const watchList = document.querySelector('.watchList');
export let page = '';

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
    searchAPI();
  }
});

function clearMainBody() {
  mainBody.innerHTML = '';
}
