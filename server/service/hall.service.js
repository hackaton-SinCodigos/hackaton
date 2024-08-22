import { HallModel } from "../models/hall.model.js";

export const createHallService = async (cineId, hall) => {

  const newHall = await HallModel.create({...hall, cineId });

  return newHall;

}

export const getHallsByCinemaIdService = async (cineId) => {
  return HallModel.findAll({ where: { cineId } });
}

export const getHallByIdService = async (hallId) => {
  return HallModel.findByPk(hallId);
}

export const deleteHallService = async (hallId) => {
  return HallModel.destroy({ where: { id: hallId } });
}

export const updateHallService = async (hallId, updatedHallData) => {
  const [rowsUpdated] = await HallModel.update(updatedHallData, {
    where: { id: hallId }
  });

  if (rowsUpdated === 0) {
    throw new Error("Sala no encontrada o no actualizada");
  }
  
  const updatedHall = await HallModel.findByPk(hallId);
  return updatedHall;
}
