import { Router } from "express";
import {
    newMovie,
    getMovies,
    moviesById,
    updateById,
    deleteById
} from "../controllers/movies.controllers.js"

const moviesRouter = Router();

moviesRouter.post('/', newMovie);
moviesRouter.get('/:id', moviesById);
moviesRouter.get('/', getMovies);
moviesRouter.put('/:id', updateById);
moviesRouter.delete('/:id', deleteById);


export default moviesRouter;