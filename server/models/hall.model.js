import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const HallModel = sequelize.define("hall",{
    hallNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})