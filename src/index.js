import './styles.css';
import { homeBuilder } from './home.js';

export const mainBody = document.querySelector('.mainBody');
const home = document.querySelector('.home');
const watchList = document.querySelector('.watchList');
let page = 'home';

homeBuilder();

home.addEventListener('click', () => {
  if (page === 'home') {
  } else if (page !== 'home') {
    clearMainBody();
    homeBuilder();
    page = 'home';
  }
});

watchList.addEventListener('click', () => {
  if (page === 'watchList') {
  } else if (page !== 'watchList') {
    clearMainBody();
    console.log('watchlist');
    page = 'watchlist';
  }
});

function clearMainBody() {
  mainBody.innerHTML = '';
}
