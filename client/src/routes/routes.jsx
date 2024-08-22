
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';

import NotFound from '../components/NotFound';
import Login from '../components/forms/login';
import Register from '../components/forms/register';
const Routers = () => {
  return (
    <Router>
  
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
