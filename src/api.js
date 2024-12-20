import { page } from './index';
import { searchResultsLoop } from './search';
import { movieCardExpandedCreator } from './movieCardExpanded';

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
    return fetchMoviesByCategory(category); // Return the promise to ensure Promise.all works
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
      const movies = data.results.slice(0, 15); // Get the first 5 movies
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
      if (page === 'Movie Card') {
        searchResults.push(data.results[0]);
      } else {
        data.results.forEach((result) => {
          searchResults.push(result);
        });
      }
      if (page === 'Movie Card') {
        movieCardExpandedCreator();
      } else {
        searchResultsLoop();
      }
    })

    .catch((error) => console.error('Error fetching data:', error));
}
