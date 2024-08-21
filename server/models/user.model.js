import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const UserModel = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
      type: DataTypes.ENUM['client', 'admin', 'cinema'],
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
)