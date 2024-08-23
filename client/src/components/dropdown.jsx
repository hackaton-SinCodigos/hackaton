import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../assets/css/sidebar.module.css";

export const DropDown = () => {
  const navigate = useNavigate();

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
      <button className={styles.sidebarButton} onClick={() => navigate('/')}>
        Home
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/movie-list')}>
        Movie List
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/add-movie')}>
        Add Movie
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/login')}>
        Login
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/reserva')}>
        Reservas
      </button>
    </div>
  );
};
