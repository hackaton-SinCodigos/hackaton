import { body } from "express-validator";

export const createMovieValidation = [
    body("title")
    .isString({
        min: 5,
        max: 25
    })
    .withMessage("El titulo solo debe contener letras.")
    .notEmpty()
    .trim
    .withMessage("El titulo no puede estar vacio"),
    body("clasification")
    .notEmpty()
    .withMessage("La clasificacion no puede estar vacia.")
    .trim
    .isIn(['G', 'PG', 'PG-13', 'R', 'NC-17'])
    .withMessage("Clasificacion invalida"),
    body("synopsis")
    .isString({
        min: 5,
        max: 100
    })
    
]