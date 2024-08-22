
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home';
import { Navbar } from '../components/navbar';
import NotFound from '../components/NotFound';
import Login from '../components/login';
import Register from '../components/register';
const Routers = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default Routers;
