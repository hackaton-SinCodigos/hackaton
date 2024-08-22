import { Router } from 'express';
import { associateGenresToMovie, createGenreController, getMovieGenres } from '../controllers/genre.controllers.js';

const genreRouter = Router();

genreRouter.post('/', createGenreController);
genreRouter.post('/movies/:id/genres', associateGenresToMovie);
genreRouter.get('/movies/:id/genres', getMovieGenres);

export default genreRouter;