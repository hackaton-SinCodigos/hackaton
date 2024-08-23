import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/sidebar.module.css';
import useAuth from '../hook/useAuth';
import { useEffect, useState } from 'react';
import { CustomFetch } from '../api/CustomFetch';
import Swal from "sweetalert2";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { authState, logout } = useAuth();

  useEffect(() => {
    if (authState.token) {
      CustomFetch(
        `http://localhost:4000/api/user/token/${authState.token}`,
        'GET',
      )
        .then((response) => {
          setUser(response);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [authState.token]);

  const handleLogout = ()=>{
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez cerrada la sesión no podrás acceder a tu cuenta",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
        Swal.fire(
          "Cerrado",
          "Tu sesión ha sido cerrada",
          "success"
        );
        window.location.reload();
      }
    });
  }

  return (
    <div className={styles.sidebar}>
      <button className={styles.sidebarButton} onClick={() => navigate('/')}>
        <img
          width='25'
          height='25'
          src='https://img.icons8.com/ios/50/home--v1.png'
          alt='home--v1'
        />
      </button>
      <button
        className={styles.sidebarButton}
        onClick={() => navigate('/movie-list')}
      >
        <img
          width='25'
          height='25'
          src='https://img.icons8.com/ios/50/list--v1.png'
          alt='list--v1'
        />
      </button>
      {user && user.role === 'cinema' ? (
        <button
          className={styles.sidebarButton}
          onClick={() => navigate('/add-movie')}
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/ios/50/add--v1.png'
            alt='add--v1'
          />
        </button>
      ) : (
        ''
      )}
      {authState.isLogged ? (
        <button 
          className={styles.sidebarButton}
          onClick={handleLogout}
        >
          <img
            className={styles.logout}
            width='35'
            height='35'
            src="https://img.icons8.com/?size=52&id=56982&format=png" 
            alt="Logout" 
          />
        </button>
      ) : (
        <button
          className={styles.sidebarButton}
          onClick={() => navigate('/login')}
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/ios-filled/50/login-rounded-right.png'
            alt='login-rounded-right'
          />
        </button>
      )}
      <button
        className={styles.sidebarButton}
        onClick={() => navigate('/reserva')}
      >
        <img
          width='25'
          height='25'
          src='https://img.icons8.com/ios-filled/50/ticket.png'
          alt='ticket'
        />
      </button>
    </div>
  );
};

export default Sidebar;
