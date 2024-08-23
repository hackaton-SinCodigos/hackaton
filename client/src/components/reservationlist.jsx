import styles from '../assets/css/reservationsList.module.css';
import Sidebar from './SideBar';

const ReservationsList = () => {
  const reservations = [
    {
      hora: '20:00',
      dia: '2024-08-25',
      tipo: '3D',
      precio: '$12.00',
      idioma: 'Español',
      pelicula: 'Inception'
    },
    {
      hora: '18:30',
      dia: '2024-08-26',
      tipo: '2D',
      precio: '$10.00',
      idioma: 'Inglés',
      pelicula: 'The Matrix'
    },
    {
      hora: '21:00',
      dia: '2024-08-27',
      tipo: '3D',
      precio: '$15.00',
      idioma: 'Español',
      pelicula: 'The Dark Knight'
    }
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <h1>Mis Reservas</h1>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Día</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th>Idioma</th>
                <th>Película</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td>{reservation.hora}</td>
                  <td>{reservation.dia}</td>
                  <td>{reservation.tipo}</td>
                  <td>{reservation.precio}</td>
                  <td>{reservation.idioma}</td>
                  <td>{reservation.pelicula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReservationsList;
