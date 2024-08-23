import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';
import NotFound from '../components/NotFound';
import Login from '../components/forms/login';
import Register from '../components/forms/register';
import AddMovie from '../components/forms/addMovie';
import MovieList from '../components/MovieList';
import { useState } from 'react';


const Routers = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div>
     
        <div >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
            <Route path="/movie-list" element={<MovieList movies={movies} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Routers;
