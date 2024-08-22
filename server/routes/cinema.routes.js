import { Router } from 'express';
import { createCinemaController, deleteCinemaController } from '../controllers/cinema.controllers.js';

const cinemaRouter = Router();

cinemaRouter.post('/', createCinemaController)
cinemaRouter.delete('/:id', deleteCinemaController)

export default cinemaRouter;