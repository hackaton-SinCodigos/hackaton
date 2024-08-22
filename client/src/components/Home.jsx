import { Navbar } from "./Navbar.jsx";
import styles from ".././assets/css/home.module.css"; 

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.jumbotron}>
        <h1 className={styles.title}>Bienvenido a Sincodigos</h1>
        <p className={styles.lead}>
          Descubre las películas más emocionantes disponibles en cartelera.
        </p>
        <hr className={styles.separator} />
      </div>
      
      <div className="row">
        <div className="col-md-4">
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              className={styles.cardImg}
              alt="Cine"
            />
            <div >
              <h5>Cine</h5>
              <p >
                Explora la cartelera, funciones, horarios y precios.
              </p>
              <a href="#!">
                Ver Cartelera
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              className={styles.cardImg}
              alt="Usuarios"
            />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Usuarios</h5>
              <p className={styles.cardText}>
                Realiza reservas y consulta la cartelera de cine.
              </p>
              <a href="#!" className={styles.cardBtn}>
                Ver Reservas
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              className={styles.cardImg}
              alt="Dashboard"
            />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Dashboard</h5>
              <p>
                Consulta estadísticas como días y horarios más populares.
              </p>
              <a href="#!">
                Ver Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
