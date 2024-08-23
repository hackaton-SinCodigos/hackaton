import { body } from "express-validator";

export const emitionSchema = [
  body("type")
    .isIn(["2D", "3D", "4D"])
    .withMessage("El tipo de emision solo puede ser 2D, 3D o 4D")
    .notEmpty()
    .trim(),
  body("emDate")
    .notEmpty()
    .isDate()
    .withMessage(
      "La fecha de emision es obligatoria y debe ser una fecha valida"
    ),
  body("emTime")
    .notEmpty()
    .isString()
    .withMessage(
      "El horario de emision es obligatorio y debe ser una cadena de texto"
    ),
  body("price")
    .isFloat()
    .withMessage("El precio de la emision debe ser un numero decimal")
    .notEmpty()
    .trim(),
  body("language")
    .notEmpty()
    .isString({
      min: 2,
      max: 50,
    })
    .withMessage("La lengua de la emision solo debe contener letras.")
    .trim(),
];
