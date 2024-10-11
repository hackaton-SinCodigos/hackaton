import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <button className={styles.sidebarButton} onClick={() => navigate('/')}>
      <img width="25" height="25" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1"/>
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/movie-list')}>
      <img width="25" height="25" src="https://img.icons8.com/ios/50/list--v1.png" alt="list--v1"/>
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/add-movie')}>
      <img width="25" height="25" src="https://img.icons8.com/ios/50/add--v1.png" alt="add--v1"/>
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/login')}>
      <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/login-rounded-right.png" alt="login-rounded-right"/>
      </button>
      <button className={styles.sidebarButton} onClick={() => navigate('/reserva')}>
      <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/ticket.png" alt="ticket"/>
      </button>     <button className={styles.sidebarButton} onClick={() => navigate('/movieInfo')}>
      <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/ticket.png" alt="ticket"/>
      </button>
    </div>
  );
};

export default Sidebar;
