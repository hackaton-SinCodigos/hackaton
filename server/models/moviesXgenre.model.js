import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const MoviesXGenresModel = sequelize.define("moviesXgenres", {
})

MoviesXGenresModel.removeAttribute("id")