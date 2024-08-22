import express from 'express';
import {
    createEmitionController,
    getAllEmitionsController,
    getEmitionByIdController,
    updateEmitionController,
    deleteEmitionController
} from '../controllers/emition.controller.js';

const emitionRouter = express.Router();

emitionRouter.post('/', createEmitionController);
emitionRouter.get('/', getAllEmitionsController);
emitionRouter.get('//:id', getEmitionByIdController);
emitionRouter.put('//:id', updateEmitionController);
emitionRouter.delete('//:id', deleteEmitionController);

export default emitionRouter;
