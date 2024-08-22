import { MoviesModel } from "../models/movies.models.js";

export const createMovieService = async (movie) => {
  const newMovie = await MoviesModel.create(movie);
  return newMovie;
}

export const getMovieByIdService = async (id) => {
  const movie = await MoviesModel.findByPk(id);
  return movie;
}

export const getMoviesService = async () => {
  const movies = await MoviesModel.findAll();
  return movies;
}

export const updateMovieService = async (id, updatedMovie) => {
  const movie = await MoviesModel.findByPk(id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  await movie.update(updatedMovie);
  return movie;
}

export const deleteMovieService = async (id) => {

  return await MoviesModel.destroy( { where: { id }  });

}