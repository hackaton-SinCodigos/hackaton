import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const ReservationModel = sequelize.define("reservation", {
    resState: {
        type: DataTypes.ENUM("pendiente", "cancelado"),
        allowNull: false,
        defaultValue: "pendiente"
    }
})