import { searchResults } from './api';
import { flexWrap } from './index';
import { mainBody } from './index';
import { flexWrapBuilder } from './index';

///loops through searchResults array and grabs posters images
export function searchResultsLoop() {
  flexWrapBuilder();

  searchResults.forEach((result) => {
    // console.log(result.title);
    console.log('this is the result of a click', searchResults);
    let poster_image = result.poster_path;
    if (poster_image && poster_image !== null && poster_image !== '') {
      posterBuilder(poster_image, result.title);
    } else {
      console.log(`No valid image for ${result}`);
    }
  });
  // console.log('search results', searchResults);
}

///creates poster card and adds images
function posterBuilder(poster_image, result_name) {
  // console.log('the result name', result_name);
  let posterImage = document.createElement('img');
  posterImage.classList.add('flexCard');
  posterImage.dataset.title = `${result_name}`;
  // console.log('result name', `${result_name}`);
  posterImage.src = `https://image.tmdb.org/t/p/w500${poster_image}`;
  mainBody.append(flexWrap);
  flexWrap.append(posterImage);
}
