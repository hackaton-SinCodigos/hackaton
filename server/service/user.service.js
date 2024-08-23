import { UserModel } from '../models/user.model.js';
import { CinemaModel } from '../models/cinema.model.js';
import { hashString } from '../helper/hashString.js';
import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';  
import { environments } from '../config/environments.js';

export const createUser = async (user) => {
  try {
    // Hash the password
    const hashedPassword = await hashString(user.password);
    user.password = hashedPassword;

    // Si el rol es "cine", obtener el único cine
    if (user.role === 'cinema') {
      const cinema = await CinemaModel.findOne();
      if (!cinema) {
        throw new Error('No se encontró un cine en la base de datos');
      }
      user.cinemaId = cinema.id;
    }

    // Create the user
    const newUser = await UserModel.create(user);
    return newUser;
  } catch (err) {
    console.error(err);
    throw new Error('Error creating user');
  }
}

export const getUserByEmail = async(email) => {
  try {
    return await UserModel.findOne( { where: { email } });
  } catch (err) {
    console.error(err);
    throw new Error('Error getting user by email');
  }
}

export const getUserByEmailAndPassword = async (email, password) => {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      throw new Error('Datos erroneos');
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Datos erroneos');
    }

    return user;
}

export const finOneByToken = async (token) => {
  const decodedToken = jwt.decode(token, environments.SECRET);

  if (!decodedToken) {
    throw new Error('Token inválido');
  }

  const userId = decodedToken.user;

  const user = await UserModel.findByPk(userId);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  return user;
}