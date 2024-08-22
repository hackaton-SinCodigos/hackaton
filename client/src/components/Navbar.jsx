import { Link } from 'react-router-dom';
import styles from ".././assets/css/navbar.module.css"; // Importamos el archivo CSS mejorado

export const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${styles.brand}`} to="/">SinCodigo</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/about">Reserva</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
