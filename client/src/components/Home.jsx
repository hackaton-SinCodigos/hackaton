import styles from '../assets/css/home.module.css';

const Home = () => {
  return (
    <div>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Bienvenido a Sincodigos</h1>
          <p className={styles.lead}>
            Tu destino para disfrutar de las películas más emocionantes.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Próximos Estrenos</h2>
        <p className={styles.description}>
          Mantente al día con los últimos estrenos y no te pierdas ninguna novedad.
        </p>
        <p className={styles.description}>
          En Sincodigos, siempre encontrarás una amplia selección de películas que se adaptan a todos los gustos. Desde los éxitos de taquilla hasta las joyas del cine independiente, hay algo para cada amante del cine.
        </p>
      </div>


      <div className={styles.section}>
        <h2 className={styles.subtitle}>Explora y Reserva</h2>
        <p className={styles.description}>
          Reserva tus entradas con anticipación y asegúrate de tener tu lugar en la sala.
        </p>
        <p className={styles.description}>
          Explora nuestra cartelera, selecciona tus películas favoritas y garantiza tu entrada a las funciones más populares. ¡No te quedes fuera!
        </p>
        <button className={styles.ctaButton}>Reservar Ahora</button>
      </div>
    </div>
  );
};

export default Home;
