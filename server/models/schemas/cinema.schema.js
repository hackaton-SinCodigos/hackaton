import { body } from "express-validator";

export const cinemaSchema = [
  body("name")
    .notEmpty()
    .withMessage("El nombre del cine es obligatorio")
    .isString({
      min: 5,
      max: 20,
    }),
  body("location")
    .notEmpty()
    .withMessage("La ubicación del cine es obligatoria")
    .isString({
      min: 5,
      max: 50,
    }),
  body("email")
    .isEmail()
    .withMessage("El email del cine es invalido")
    .trim()
    .notEmpty(),
];
