import React from 'react';
import styles from '../assets/css/movieInfo.module.css';
import Sidebar from './Sidebar';
import alienImage from '../assets/alien.jpg'; // Asegúrate de usar la extensión correcta del archivo

export const MovieInfo = () => {
    const movie = {
        title: "Inception",
        clasification: "PG-13",
        synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        portrait: alienImage, // Usa la variable importada aquí
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        distribution: "Warner Bros. Pictures",
        duration: "148 min",
        director: "Christopher Nolan"
    };

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <div className={styles.movieInfoContainer}>
                <div className={styles.movieInfoImage}>
                    <img src={movie.portrait} alt={`Portrait of ${movie.title}`} className={styles.moviePortrait} />
                </div>
                <div className={styles.movieDetails}>
                    <h1>{movie.title}</h1>
                    <p><strong>Clasificación:</strong> {movie.clasification}</p>
                    <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
                    <p><strong>Duración:</strong> {movie.duration}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Distribución:</strong> {movie.distribution}</p>
                    <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className={styles.trailerLink}>Ver Trailer</a>
                </div>
            </div>
        </div>
    );
};
