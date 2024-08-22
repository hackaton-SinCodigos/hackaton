import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const MoviesModel = sequelize.define("movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clasification: {
        type: DataTypes.ENUM("G", "PG", "PG-13", "R", "NC-17"),
        defaultValue: "G",
        allowNull: false,
    },
    synopsis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    portrait: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trailer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distribution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    }
})