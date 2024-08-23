import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
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
      <button className={styles.sidebarButton} onClick={() => navigate('/login')}>
        reservas
      </button>
    </div>
  );
};

export default Sidebar;
