import Sidebar from './SideBar';
import styles from '../assets/css/movieList.module.css'; 

const MovieList = () => {
    // Conjunto de películas


    return (
        <div className={styles.movieList}>
            <Sidebar />
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Cartelera</h1>
                    <p className={styles.subtitle}>
                        Aquí puedes ver las películas actuales que están en cartelera.
                    </p>
                </div>
                <div className={styles.cardsContainer}>
                    {/* {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
