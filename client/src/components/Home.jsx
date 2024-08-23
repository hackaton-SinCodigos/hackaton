
import MovieCard from '../components/MovieCard';
import styles from '../assets/css/home.module.css';

const movies = [
  {
    titulo: "Inception",
    sinopsis: "A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to have his criminal history erased as payment for implanting another person's idea into a target's subconscious.",
    portada: "https://via.placeholder.com/150",
    trailer: "https://www.youtube.com/watch?v=8hP9D6kZseM"
  },
  {
    titulo: "The Matrix",
    sinopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    portada: "https://via.placeholder.com/150",
    trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU"
  },
  {
    titulo: "Interstellar",
    sinopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    portada: "https://via.placeholder.com/150",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  }
];

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
      <div className={styles.movieContainer}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
