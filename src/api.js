import { cloneCarouselContainer } from './homeMaker';
import { cloneContainer } from './homeMaker';
import { page } from './index';
import { searchResultsLoop } from './search';
import {
  movieCardExpandedCreator,
  movieObjectMaker,
} from './movieCardExpanded';
import { clearMainBody } from './index';
import { movieObjectCreator } from './movieCardExpanded';

export const movieLibrary = {
  popular: [],
  top_rated: [],
  action: [],
  comedy: [],
  drama: [],
  horror: [],
  romance: [],
};

export let searchResults = [];

const apiKey = '6d1c6bdb01f6a3f8c701bb8779398b91';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export async function movieFetch() {
  if (window.fetchInProgress) {
    console.log('Fetch in progress, please wait...');
    return;
  }

  // Flag to track if fetch is already in progress
  window.fetchInProgress = true;
  const categories = [
    {
      name: 'popular',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      name: 'top_rated',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      name: 'action',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&language=en-US&page=1`,
    }, // Action Genre ID: 28
    {
      name: 'comedy',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&language=en-US&page=1`,
    }, // Comedy Genre ID: 35
    {
      name: 'drama',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=18&language=en-US&page=1`,
    }, // Drama Genre ID: 18
    {
      name: 'horror',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27&language=en-US&page=1`,
    }, // Horror Genre ID: 27
    {
      name: 'romance',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749&language=en-US&page=1`,
    }, // Romance Genre ID: 10749
  ];

  const fetchPromisesArray = categories.map((category) => {
    fetchMoviesByCategory(category); // Return the promise to ensure Promise.all works
  });
  try {
    // Wait for all fetch operations to complete
    await Promise.all(fetchPromisesArray);
    console.log('Movies fetched for all categories:', movieLibrary);
  } catch (error) {
    console.log('Error fetching movies:', error);
  } finally {
    // Reset fetchInProgress flag after all operations are completed
    window.fetchInProgress = false;
  }
}
async function fetchMoviesByCategory(category) {
  return fetch(category.url, options)
    .then((res) => res.json())
    .then((data) => {
      // console.log('data info');
      // console.log(data);
      const movies = data.results.slice(0, 5); // Get the first 5 movies
      if (movieLibrary.romance.length > 0) {
        return;
      } else {
        //#region
        // Push the movies to the corresponding category in movieLibrary
        if (movieLibrary[category.name]) {
          movieLibrary[category.name].push(...movies); // Spread operator to add all movies
          // console.log(movieLibrary);
        } else {
          console.error(`Category ${category.name} not found in movieLibrary`);
        }
      }
      //end region
      console.log(`Fetched movies for ${category.name}:`, movies);
    })
    .catch((err) => {
      console.error(`Error fetching category ${category.name}:`, err);
    });
}

export async function searchAPI(query) {
  const encodedQuery = encodeURIComponent(query);
  searchResults = [];

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&api_key=${apiKey}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log('IT WORKED');
      // console.log('movie search info', data.results[0]);
      if (page === 'Movie Card') {
        // searchResults = [];
        searchResults.push(data.results[0]);
      } else {
        data.results.forEach((result) => {
          searchResults.push(result);
        });
      }
      if (page === 'Movie Card') {
        // console.log('movie card expanded creator');
        // movieObjectCreator();
        movieCardExpandedCreator();
        // console.log('watchlist');
      } else {
        searchResultsLoop();
      }
    })

    .catch((error) => console.error('Error fetching data:', error));
}

//  if (page === 'watchlist') {
//    if (hasRun === false) {
//      hasRun = true;
//      await searchAPI(hasRun);
//      hasRun = false;
//      return;
//    }
//  }

// function fetchMoviesByCategory(category) {
//   return fetch(category.url, options)
//     .then((response) => {
//       if (!response.ok) {
//         console.error(`Error fetching category: ${category.name}`);
//         throw new Error(`Failed to fetch category: ${category.name}`);
//       }
//       return response.json();
//     })
//     .then((response) => {
//       // Loop through the first 5 movies (or more if needed)
//       for (let i = 0; i < 5; i++) {
//         let movie = {
//           name: response.results[i].title,
//           description: response.results[i].overview,
//           poster: `https://image.tmdb.org/t/p/w500${response.results[i].poster_path}`,
//           id: response.results[i].id,
//         };

//         // Check if the category exists in movieLibrary and push the movie to the corresponding array
//         if (movieLibrary[category.name]) {
//           movieLibrary[category.name].push(movie);
//         } else {
//           console.error(`Category ${category.name} not found in movieLibrary`);
//         }
//       }
//     })
//     .catch((error) => {
//       console.error(`Error processing category ${category.name}:`, error);
//     });
// }
