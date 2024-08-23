import { sequelize } from "./database.js";
import { MoviesModel } from "../models/movies.models.js";
import { UserModel } from "../models/user.model.js";
import { CinemaModel } from "../models/cinema.model.js";
import { HallModel } from "../models/hall.model.js";
import { ReservationModel } from "../models/reservation.model.js";
import { EmitionModel } from "../models/emition.model.js";
import { GenresModel } from "../models/genres.model.js";
import { MoviesXGenresModel } from "../models/moviesXgenre.model.js";

//Relacion de las reservaciones con el usuario
UserModel.hasMany(ReservationModel)
ReservationModel.belongsTo(UserModel)

//Relacion entre la reserva y la fecha de emision
EmitionModel.hasMany(ReservationModel)
ReservationModel.belongsTo(EmitionModel)

//Relacion entre la fecha de emision y peliculas
MoviesModel.hasMany(EmitionModel)
EmitionModel.belongsTo(MoviesModel)

//Relacion entre la fecha de emision y las salas
HallModel.hasMany(EmitionModel)
EmitionModel.belongsTo(HallModel)

//Relacion entre la sala y el cine
CinemaModel.hasMany(HallModel)
HallModel.belongsTo(CinemaModel)

//Relacion entre peliculas y generos
MoviesModel.belongsToMany(GenresModel, {through: MoviesXGenresModel})
GenresModel.belongsToMany(MoviesModel, {through: MoviesXGenresModel})
// Relación entre usuario y cine
UserModel.belongsTo(CinemaModel, { foreignKey: 'cinemaId' });
CinemaModel.hasMany(UserModel, { foreignKey: 'cinemaId' });

export async function startDb() {
  try {
    await sequelize.sync({force: false});
    console.log('Database started successfully');
  } catch (err) {
    console.log('Error starting database')
    console.error(err);
  }
}