import MovieCard from './MovieCard';
import Sidebar from './SideBar';
import '../assets/css/movieList.module.css';

const MovieList = () => {
  return (
    <div className='movieList'>
      <Sidebar />
      <div className='content'>
        <div className='header'>
          <h1>Cartelera</h1>
          <p>Aquí puedes ver las películas actuales que están en cartelera!</p>
        </div>
        <div className='cardsContainer'>
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
