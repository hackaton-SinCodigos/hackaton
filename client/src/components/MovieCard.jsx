import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from "../assets/css/movieCard.module.css"
const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className={styles.portada} src={movie.portada} />
      <Card.Body>
        <Card.Title>{movie.titulo}</Card.Title>
        <Card.Text>{movie.sinopsis}</Card.Text>
        <Button variant="primary" href={movie.trailer} target="_blank">Ver Tráiler</Button>
        <Button variant="primarY" className={styles.reserva} target="_blank">Reserva</Button>

      </Card.Body>
    </Card>
  );
};

export default MovieCard;
