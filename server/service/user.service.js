import { UserModel } from '../models/user.model.js';
import { hashString } from '../helper/hashString.js';

export const createUser = async (user) => {
  try {
    const hashedPassword = await hashString(user.password)
    user.password = hashedPassword;
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
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await compareHash(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Error getting user by email and password');
  }
}