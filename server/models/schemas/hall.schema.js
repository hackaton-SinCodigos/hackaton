import { body } from "express-validator";

export const hallSchema = [
  body("hallNumber")
    .isInt()
    .withMessage("El numero del salon debe ser un numero entero.")
    .notEmpty()
    .trim(),
  body("capacity")
    .isInt()
    .withMessage("La capacidad del salon debe ser un numero entero.")
    .notEmpty()
    .trim(),
];
