import { Router } from "express";
import {
    newMovie,
    getMovies,
    moviesById,
    updateById,
    deleteById
} from "../controllers/controllers.js"

const moviesRouter = Router();

moviesRouter.post('/', newMovie);
moviesRouter.get('/', getMovies);
moviesRouter.get('/:id', moviesById);
moviesRouter.put('/:id', updateById);
moviesRouter.delete('/:id', deleteById);

export default moviesRouter;