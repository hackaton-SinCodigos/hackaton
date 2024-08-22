import { CinemaModel } from '../models/cinema.model.js';

export const createCinemaService = async (cinema) => {
  const newCinema = await CinemaModel.create(cinema)
  return newCinema;
}

export const getCinemaByIdService = async (cinemaId) => {
  const cinema = await CinemaModel.findByPk(cinemaId);
  return cinema;
}

export const deleteCinemaService = async (cinemaId) => {
  await CinemaModel.destroy({ where: { id: cinemaId } });
}