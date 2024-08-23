import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';
import NotFound from '../components/NotFound';
import Login from '../components/forms/login';
import Register from '../components/forms/register';
import AddMovie from '../components/forms/addMovie';
import MovieList from '../components/MovieList';
import ReservationsList from '../components/reservationlist';

const Routers = () => {

  return (
    <Router>
      <div>
     
        <div >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie-list" element={<MovieList />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/reserva" element={<ReservationsList/>} />
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
