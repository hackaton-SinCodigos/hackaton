import { addGenresToMovie, createGenreService, getGenresByMovie } from "../service/genre.service.js";

export const createGenreController = async (req, res) => {
  try {
    const genre = await createGenreService(req.body);
    
    if (!genre) {
      return res.status(400).json({ message: 'Género no creado' });
    }

    res.status(201).json(genre);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const associateGenresToMovie = async (req, res) => {
  try {
    const { movieId, genreIds } = req.body;

    if (!movieId || !genreIds || !Array.isArray(genreIds)) {
      return res.status(400).json({ message: "Datos inválidos" });
    }

    const updatedMovie = await addGenresToMovie(movieId, genreIds);

    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMovieGenres = async (req, res) => {
  try {
    const movieId = req.params.id;

    const genres = await getGenresByMovie(movieId);

    if (!genres) {
      return res.status(404).json({ message: "Pelicula o géneros no encontrados" });
    }

    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};