import { Router } from 'express';
import { createHallController, deleteHallController, getHallByIdController, getHallsController, updateHallController } from '../controllers/hall.controllers.js';

const hallRouter = Router();

hallRouter.post('/:idCinema', createHallController);
hallRouter.get('/:idCinema', getHallsController);
hallRouter.get('/:idCinema/:idHall', getHallByIdController);
hallRouter.delete('/:idCinema/:idHall', deleteHallController);
hallRouter.put('/:idCinema/:idHall', updateHallController);

export default hallRouter;