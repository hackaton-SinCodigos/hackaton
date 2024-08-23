import { getCinemaByIdService } from "../service/cinema.service.js";
import { createHallService, deleteHallService, getHallByIdService, getHallsByCinemaIdService, updateHallService } from "../service/hall.service.js";

export const createHallController = async (req, res) => {
  try {
    const cineId = req.params.idCinema;
    const hall = req.body;

    const cineIdExist = await getCinemaByIdService(cineId);
    if (!cineIdExist) {
      return res.status(404).json({ message: 'Cine no encontrado' });
    }
    const newHall = await createHallService(cineId, hall);

    if (!newHall) {
      return res.status(400).json({ message: 'Sala no creada' });
    }

    res.status(201).json(newHall);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const getHallsController = async (req, res) => {
  try {
    const cineId = req.params.idCinema;

    const cineIdExist = await getCinemaByIdService(cineId);

    if (!cineIdExist) {
      return res.status(404).json({ message: 'Cine no encontrado' });
    }

    const halls = await getHallsByCinemaIdService(cineId);
    res.json(halls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const deleteHallController = async (req, res) => {
  try {

    const hallId = req.params.idHall;
    const cineId = req.params.idCinema;

    const cineIdExist = await getCinemaByIdService(cineId);
    if (!cineIdExist) {
      return res.status(404).json({ message: 'Cine no encontrado' });
    }

    const hallExist = await getHallByIdService(hallId);
    if (!hallExist) {
      return res.status(404).json({ message: 'Sala no encontrada' });
    }

    const deletedHall = await deleteHallService(hallId);

    if (!deletedHall) {
      return res.status(400).json({ message: 'Sala no eliminada' });
    }

    res.status(200).json({ message: 'Sala eliminada correctamente' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const updateHallController = async (req, res) => {
  try {
    const hallId = req.params.idHall;
    const cineId = req.params.idCinema;
    const hall = req.body;

    const cineIdExist = await getCinemaByIdService(cineId);
    if (!cineIdExist) {
      return res.status(404).json({ message: 'Cine no encontrado' });
    }

    const hallExist = await getHallByIdService(hallId);
    if (!hallExist) {
      return res.status(404).json({ message: 'Sala no encontrada' });
    }

    const updatedHall = await updateHallService(hallId, hall);
    if (!updatedHall) {
      return res.status(400).json({ message: 'Sala no actualizada' });
    }
    res.status(200).json(updatedHall);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const getHallByIdController = async (req, res) => {
  try {
    const hallId = req.params.idHall;
    const cineId = req.params.idCinema;
    const cineIdExist = await getCinemaByIdService(cineId);
    if (!cineIdExist) {
      return res.status(404).json({ message: 'Cine no encontrado' });
    }
    const hall = await getHallByIdService(hallId);
    if (!hall) {
      return res.status(404).json({ message: 'Sala no encontrada' });
    }
    res.json(hall);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}