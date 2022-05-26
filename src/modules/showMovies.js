import { postLike, getLikes } from './Involvement.js';

const main = document.querySelector('.main-page');

const showMovies = async (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const movieDisplay = document.createElement('div');
    movieDisplay.classList.add('movie-content');
    const movieCard = document.createElement('div');
    movieCard.classList.add('card-image');
    const Img = document.createElement('img');
    Img.setAttribute('src', `${data[i].image.medium}`);
    Img.setAttribute('alt', `affiche of ${data[i].name}`);
    Img.setAttribute('class', 'movie-img');
    const movieDescript = document.createElement('div');
    movieDescript.classList.add('movie-descrp');
    const movieRating = document.createElement('div');
    movieRating.setAttribute('class', 'movie-ratings');
    const title = document.createElement('h2');
    title.classList.add('movie-title');
    title.textContent = `${data[i].name}`;
    const stats = document.createElement('span');
    stats.classList.add('stats');
    const like = document.createElement('i');
    like.setAttribute('class', 'fa like-btn fa-heart');
    like.setAttribute('id', `${data[i].id}`);
    like.setAttribute('aria-hidden', 'true');
    const likeCount = document.createElement('p');
    likeCount.setAttribute('class', 'rateCounts');
    likeCount.setAttribute('Id', `${data[i].id}`);
    likeCount.textContent = '0';
    stats.append(like);
    movieRating.appendChild(stats);
    movieDescript.append(title, movieRating);
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('movie-comment');
    commentBtn.setAttribute('movie-Id', `${data[i].id}`);
    commentBtn.textContent = 'Comments';
    const line = document.createElement('br');
    const Reservationbtn = document.createElement('button');
    Reservationbtn.setAttribute('movie-Id', `${data[i].id}`);
    Reservationbtn.classList.add('movie-reservation');
    Reservationbtn.id = `${data[i].id}`;
    Reservationbtn.textContent = 'Reservation';
    movieDescript.append(commentBtn, line, Reservationbtn);
    movieDisplay.append(Img, movieDescript);
    main.appendChild(movieDisplay);

    const updateLikes = async () => {
      const response = await getLikes();
      const counts = document.querySelectorAll('.rateCounts');

      counts.forEach((button) => {
        for (let i = 0; i < response.length; i += 1) {
          if (button.id === response[i].item_id) {
            button.textContent = `${response[i].likes} likes`;
          }
        }
      });
      stats.append(likeCount);
    };

    like.addEventListener('click', (e) => {
      const itemId = e.target.attributes.id.value;
      postLike(itemId);
      like.classList.toggle('liked');
      updateLikes();
    });
    updateLikes();
  }
};
export default showMovies;
