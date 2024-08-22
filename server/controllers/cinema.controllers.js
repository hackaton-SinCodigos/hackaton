import { createCinemaService, deleteCinemaService, getCinemaByIdService } from '../service/cinema.service.js';

export const createCinemaController = async(req, res) => {
  try {
    const cinema = await createCinemaService(req.body);

    if (!cinema) {
      return res.status(400).send({ message: 'No se pudo crear el cine' });
    }
    res.status(201).json(cinema);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const deleteCinemaController = async (req, res) => {
  try {
    const cinemaId = req.params.id;
    const cinema = await getCinemaByIdService(cinemaId);

    if (!cinema) {
      return res.status(404).send({ message: 'Cine no encontrado' });
    }

    await deleteCinemaService(cinemaId);

    res.status(200).json({ message: 'Cine eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
