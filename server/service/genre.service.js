import { GenresModel } from "../models/genres.model.js"
import { MoviesModel } from "../models/movies.models.js"

export const createGenreService = async (genre) => {
  const newGenre = await GenresModel.create(genre);
  return newGenre;
}

export const addGenresToMovie = async (movieId, genreIds) => {
  try {
    const movie = await MoviesModel.findByPk(movieId);
    if (!movie) throw new Error("Pelicula no encontrada");

    const genres = await GenresModel.findAll({
      where: {
        id: genreIds,
      },
    });

    if (genres.length !== genreIds.length) {
      throw new Error("Uno o más géneros no encontrados");
    }

    await movie.addGenres(genres);
    return movie;
  } catch (err) {
    console.error(err);
    throw new Error("Error asociando géneros a la película");
  }
};

export const getGenresByMovie = async (movieId) => {
  try {
    const movie = await MoviesModel.findByPk(movieId, {
      include: GenresModel,
    });
    if (!movie) throw new Error("Pelicula no encontrada");

    return movie.genres;
  } catch (err) {
    console.error(err);
    throw new Error("Error obteniendo géneros de la película");
  }
};