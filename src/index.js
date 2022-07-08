import './style.css';
import './css/app.css';
import './css/comment.css';
import reservationListener from './modules/createPopup.js';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';
import commentsListner from './modules/commentsPopUp.js';
import './modules/moviesCount.js';
// import listenHeartClicks from './modules/Involvement.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
  reservationListener();
  commentsListner();
};
displayItem();

const menuItems = document.querySelector('.nav-items');
const middleNav = document.querySelector('.nav-middle');
const humb = document.querySelector('.humb');
const close = document.querySelector('.close');

humb.addEventListener('click', () => {
  menuItems.style.display ="block";
  middleNav.style.width ="40%";
  humb.style.display ="none";
  close.style.display ="block";
  document.body.style.overflowY ="hidden";
})

close.addEventListener('click', () => {
  menuItems.style.display ="none";
  middleNav.style.width ="0";
  humb.style.display ="flex";
  close.style.display ="none";
  document.body.style.overflowY ="visible";
})

