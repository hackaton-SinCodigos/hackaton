import { sequelize } from "./database.js";

export async function startDb() {
  try {
    await sequelize.sync({alter: true});
    console.log('Database started successfully');
  } catch (err) {
    console.log('Error starting database')
    console.error(err);
  }
}