import { body } from "express-validator";

//Validacion para el POST
export const createMovieValidation = [
    body("title")
    .isString({
        min: 5,
        max: 155
    })
    .withMessage("El titulo solo debe contener letras.")
    .notEmpty()
    .withMessage("El titulo no puede estar vacio"),
    body("clasification")
    .notEmpty()
    .withMessage("La clasificacion no puede estar vacia.")
    .isIn(['G', 'PG', 'PG-13', 'R', 'NC-17'])
    .withMessage("Clasificacion invalida"),
    body("synopsis")
    .isString({
        min: 5,
        max: 155
    })
    .notEmpty()
    .withMessage("La sinopsis no puede estar vacia."),
    body("portrait")
    .notEmpty(),
    body("trailer")
    .notEmpty(),
    body()
]