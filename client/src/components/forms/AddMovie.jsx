import { useState } from 'react';
import { CustomFetch } from '../../api/CustomFetch.jsx'
import styles from '../../assets/css/addMovie.module.css'; 
import Swal from 'sweetalert2';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    titulo: '',
    clasificacion: '',
    sinopsis: '',
    portada: '',
    trailer: '',
    reparto: '',
    duracion: '',
    director: ''
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const payload = {
        title: movie.titulo,
        clasification: movie.clasificacion,
        synopsis: movie.sinopsis,
        portrait: movie.portada,
        trailer: movie.trailer,
        distribution: movie.reparto,
        duration: movie.duracion,
        director: movie.director
      }

      await CustomFetch('http://localhost:4000/api/movie/', 'POST', payload)
      Swal.fire({
        title: "Pelicula agregada",
        text: "La pelicula se agregó correctamente",
        icon: "success",
        width: "50%",
        padding: "1rem",
        background: "#FFF",
        grow: "row",
      })
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al crear la pelicula",
        icon: "error",
        width: "50%",
        padding: "1rem",
        background: "#FFF",
        grow: "row",
    });
    }

  };

  return (
    <div className={styles.addMovieContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Agregar Película</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="titulo" className={styles.formLabel}>Título</label>
            <input type="text" name="titulo" className={styles.formControl} placeholder="Título" onChange={handleChange} />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="clasificacion" className={styles.formLabel}>Clasificación</label>
            <input type="text" name="clasificacion" className={styles.formControl} placeholder="Clasificación" onChange={handleChange} />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="sinopsis" className={styles.formLabel}>Sinopsis</label>
            <textarea name="sinopsis" className={styles.formControl} placeholder="Sinopsis" onChange={handleChange} />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="portada" className={styles.formLabel}>URL de la Portada</label>
            <input type="text" name="portada" className={styles.formControl} placeholder="URL de la portada" onChange={handleChange} />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="trailer" className={styles.formLabel}>URL del Tráiler</label>
            <input type="text" name="trailer" className={styles.formControl} placeholder="URL del tráiler" onChange={handleChange} />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="reparto" className={styles.formLabel}>Reparto</label>
            <input type="text" name="reparto" className={styles.formControl} placeholder="Reparto" onChange={handleChange} />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="duracion" className={styles.formLabel}>Duración</label>
            <input type="text" name="duracion" className={styles.formControl} placeholder="Duración" onChange={handleChange} />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="director" className={styles.formLabel}>Director</label>
            <input type="text" name="director" className={styles.formControl} placeholder="Director" onChange={handleChange} />
          </div>
          <button type="submit" className={styles.btnPrimary}>Agregar Película</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
