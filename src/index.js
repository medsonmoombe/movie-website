import './style.css';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';
import './modules/moviesCount.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
};
displayItem();