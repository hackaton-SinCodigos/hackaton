import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const GenresModel = sequelize.define("genre", {
    gType: {
        type: DataTypes.STRING,
        allowNull: false
    }
})