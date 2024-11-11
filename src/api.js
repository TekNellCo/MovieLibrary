import { genreContainer } from './home';
import { containerSort } from './home';
import { cloneCarouselContainer } from './homeMaker';

export let carouselPopular = [];

export function movieFetch() {
  const apiKey = '6d1c6bdb01f6a3f8c701bb8779398b91'; // Your API key here
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  // Fetch popular movies with the API key in the query string
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        console.log('error');
      }
      return response.json();
    })
    .then(function (response) {
      for (let i = 0; i < 5; i++) {
        // console.log(response);
        let name = response.results[i].title;
        let description = response.results[i].overview;
        let poster = `https://image.tmdb.org/t/p/w500${response.results[i].poster_path}`;
        let id = response.results[i].id;
        movieObjectMaker(i, name, description, poster, id);
      }
    });
}
//   let movieName = res.results[0].title;

//   console.log(movieName);

function movieObjectMaker(i, name, description, poster, id) {
  let movie = {
    name: name,
    description: description,
    poster: poster,
    id: id,
  };
  carouselPopular.push(movie);
}
