import { sequelize } from "../config/database.js";
import { createCinemaService } from "../service/cinema.service.js";
import { createMovieService, deleteMovieService, getMovieByIdService, getMoviesService, updateMovieService } from "../service/movies.service.js";

//Crear pelicula
export async function newMovie(req, res) {
  try {
  console.log(req.body)
  const movie = await createMovieService(req.body);
  
  if (!movie) {
    return res.status(400).json({ message: 'Pelicula no creada'});
  }

  res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Error creating movie." });
  }
}

//Obtener peliculas
export async function getMovies(req, res) {
  try {
    const movies = await getMoviesService();
    if (!movies) {
      return res.status(404).json({ message: "No se encontraron peliculas" });
    }

    res.status(200).json({ movies });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error getting tasks" });
  }
}

export async function moviesById(req, res) {
  try {
    const movieId = req.params.id;
    if (!movieId) {
      return res.status(400).json({ msg: "Invalid ID" });
    }

    const movie = await getMovieByIdService(movieId);

    if (!movie) {
      return res.status(404).json({ message: "Pelicula no encontrada" });
    }

    res.status(200).json({movie})

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error getting tasks" });
  }
}

//Actualizar tarea mediante id
export async function updateById(req, res) {
  try {
    const movieId = req.params.id;
    const newMovie = req.body;

    if (!movieId) {
      return res.status(400).json({ msg: "ID de pelicula invalida" });
    }

    const movieUpdated = await updateMovieService(movieId, newMovie);

    if (!movieUpdated) {
      return res.status(400).json({ message: "No se pudo actualizar la pelicula" });
    }

    res.status(200).json({ movie: movieUpdated });

  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Error updating movie." });
  }
}

//Borrar mediante id
export async function deleteById(req,res){
    try {
      const movieId = req.params.id;
      
      if (!movieId) {
        return res.status(400).json({ msg: "ID de pelicula invalida" });
      }
      
      const movieDeleted = await deleteMovieService(movieId);
      
      if (!movieDeleted) {
        return res.status(400).json({ message: "No se pudo eliminar la pelicula" });
      }
      
      res.status(200).json({ message: "Pelicula eliminada con exito" });
    } catch (error) {
        console.error(error)
        res.status(400).json({msg:"Error deleting movie."})
    }
}