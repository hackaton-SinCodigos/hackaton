import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const EmitionModel = sequelize.define("emition", {
    type: {
        type: DataTypes.ENUM("2D", "3D", "4D"),
        allowNull: false,
        defaultValue: "2D"
    },
    emDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    emTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    }
})