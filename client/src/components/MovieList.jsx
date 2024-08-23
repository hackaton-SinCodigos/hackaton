import Sidebar from './SideBar';
import styles from '../assets/css/movieList.module.css';
import { useEffect, useState } from 'react';
import { CustomFetch } from '../api/CustomFetch';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    CustomFetch('http://localhost:4000/api/movie', 'GET')
      .then((response) => setMovies(response.movies))
      .catch((error) => console.error('Error:', error));
  },[]);

  console.log(movies);

  return (
    <div className={styles.movieList}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cartelera</h1>
          <p className={styles.subtitle}>
            Aquí puedes ver las películas actuales que están en cartelera.
          </p>
        </div>
        <div className={styles.cardsContainer}>
        {movies.map((movie, index) => (
            <div key={index} className='card' style={{ width: '18rem' }}>
              <img src={movie.portrait} className='card-img-top' alt={movie.title} />
              <div className='card-body'>
                <h5 className='card-title'>{movie.title}</h5>
                <p className='card-text'>{movie.synopsis}</p>
                <a href={`/movie/${movie.id}`} className='btn btn-primary'>
                  Ver detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
