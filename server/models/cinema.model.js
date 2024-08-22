import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const CinemaModel = sequelize.define("cine", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})