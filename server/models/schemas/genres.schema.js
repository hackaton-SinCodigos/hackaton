import { body } from "express-validator";

export const genresSchema = [
  body("gType")
    .notEmpty()
    .withMessage("El género no puede estar vacío.")
    .isString({
      min: 2,
      max: 50,
    })
    .trim(),
];
