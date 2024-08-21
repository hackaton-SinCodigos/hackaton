import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const UserModel = sequelize.define(
  'User',
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('client', 'admin', 'cinema'),
      defaultValue: 'client',
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
)