import MovieCard from './MovieCard';
import Sidebar from './SideBar';
import styles from '../assets/css/movieList.module.css'; 

const MovieList = () => {
    // Conjunto de películas
    const movies = [
        {
            titulo: 'Inception',
            clasificacion: 'PG-13',
            sinopsis: 'A thief who enters the dreams of others to steal secrets from their subconscious is given the inverse task of planting an idea into the mind of a CEO.',
            portada: 'https://example.com/inception.jpg',
            trailer: 'https://youtube.com/watch?v=YoHD9XEInc0',
            reparto: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
            duracion: '148 min',
            director: 'Christopher Nolan'
        },
        {
            titulo: 'The Matrix',
            clasificacion: 'R',
            sinopsis: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            portada: 'https://example.com/matrix.jpg',
            trailer: 'https://youtube.com/watch?v=vKQi3bBA1y8',
            reparto: 'Keanu Reeves, Laurence Fishburne',
            duracion: '136 min',
            director: 'Lana Wachowski, Lilly Wachowski'
        },
        {
            titulo: 'The Dark Knight',
            clasificacion: 'PG-13',
            sinopsis: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to relinquish his rule of law and face his greatest enemy.',
            portada: 'https://example.com/darkknight.jpg',
            trailer: 'https://youtube.com/watch?v=EXeTwQWrcwY',
            reparto: 'Christian Bale, Heath Ledger',
            duracion: '152 min',
            director: 'Christopher Nolan'
        }
    ];

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
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
