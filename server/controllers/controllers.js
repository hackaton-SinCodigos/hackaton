import { createTracing } from "trace_events";
import { sequelize } from "../config/database.js";

//Crear pelicula
export async function newMovie(req, res) {
  const connection = await sequelize;

  const {
    title,
    clasification,
    synopsis,
    portrait,
    trailer,
    distribution,
    duration,
    director,
  } = req.body;

  try {
    await connection.query(
      "INSERT INTO movies (title, clasification, synopsis, portrait, trailer, distribution, duration, director) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"[
        (title,
        clasification,
        synopsis,
        portrait,
        trailer,
        distribution,
        duration,
        director)
      ]
    );
    res.status(201).json({ msg: "Movie created." });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Error creating movie." });
  }
}

//Obtener peliculas
export async function getMovies(req, res) {
  const connection = await sequelize;

  try {
    const [output] = await connection.query("SELECT * FROM movies");
    if (output.length === 0) {
      res.json({ message: "No movies were found" });
    } else {
      res.json(output[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error getting tasks" });
  }
  connection.end();
}

//Seleccionar pelicula por id
export async function moviesById(req, res) {
  const connection = await sequelize;

  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({ msg: "Invalid ID." });
  } else {
    try {
      const output = await connection.query(
        "SELECT * FROM movies WHERE id = ?",
        id
      );
      res.json(output[0]);
    } catch (error) {
      res.status(400).json({
        msg: "An error has occurred, check your entries and try again.",
      });
    }
  }
  connection.end();
}

//Actualizar tarea mediante id
export async function updateById(req, res) {
  const connection = await sequelize;

  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).json({ msg: "Invalid ID" });
  }

  try {
    await connection.query(
      "UPDATE movies SET title = ?, clasification = ?, synopsis = ?, portrait = ?, trailer = ?, distribution = ?, duration = ?, duration = ?, director = ?"[
        (title,
        clasification,
        synopsis,
        portrait,
        trailer,
        distribution,
        duration,
        director)
      ]
    );
    res.status(200).json({ msg: "Selected movie has been updated." });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Error updating movie." });
  }
}

//Borrar mediante id
export async function deleteById(req, res) {
  const connection = await sequelize;

  const id = parseInt(req.params.id);

  try {
    const output = await connection.query(
      "DELETE FROM movies WHERE id = ?",
      id
    );
    res.status(200).json({ msg: "Movie deleted." });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Error deleting movie." });
  }
}
