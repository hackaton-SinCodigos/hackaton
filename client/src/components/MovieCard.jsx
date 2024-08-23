import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.portada} />
      <Card.Body>
        <Card.Title>{movie.titulo}</Card.Title>
        <Card.Text>{movie.sinopsis}</Card.Text>
        <Button variant="primary" href={movie.trailer} target="_blank">Ver Tráiler</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
