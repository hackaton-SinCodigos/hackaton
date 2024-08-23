
import MovieCard from '../components/MovieCard';
import styles from '../assets/css/home.module.css';



const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.titulo}>
        <h1 className={styles.title}>Bienvenido a Sincodigos</h1>
        <p className={styles.lead}>
          Descubre las películas más emocionantes disponibles en cartelera.
        </p>
        <hr className={styles.separator} />
      </div>

    </div>
  );
};

export default Home;
