import { searchResults } from './api';
import { flexWrap } from './index';
import { mainBody } from './index';
import { flexWrapBuilder } from './index';

///loops through searchResults array and grabs posters images
export function searchResultsLoop() {
  searchResults.forEach((result) => {
    console.log(result.title);
    let poster_image = result.poster_path;

    posterBuilder(poster_image);
  });
  console.log('search results', searchResults);
}

///creates poster card and adds images
function posterBuilder(poster_image) {
  let posterImage = document.createElement('img');
  posterImage.classList.add('flexCard');
  posterImage.src = `https://image.tmdb.org/t/p/w500${poster_image}`;
  mainBody.append(flexWrap);
  flexWrap.append(posterImage);
}
