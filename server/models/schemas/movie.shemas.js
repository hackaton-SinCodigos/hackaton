import { body } from "express-validator";

export const createMovieSchema = [
    body("title")
    .isString({
        min: 5,
        max: 25
    })
    .withMessage("El titulo solo debe contener letras.")
    .notEmpty()
    .trim()
    .withMessage("El titulo no puede estar vacio"),
    body("clasification")
    .notEmpty()
    .withMessage("La clasificacion no puede estar vacia.")
    .trim()
    .isIn(['G', 'PG', 'PG-13', 'R', 'NC-17'])
    .withMessage("Clasificacion invalida"),
    body("synopsis")
    .isString({
        min: 5,
        max: 100
    })
    .notEmpty()
    .withMessage("La sinopsis no puede estar vacia")
    .trim(),
    body("portrait")
    .notEmpty()
    .withMessage("La imagen de portada no puede estar vacia")
    .trim(),
    body("trailer")
    .notEmpty()
    .isString({
        min: 10,
        max: 100
    })
    .withMessage("El enlace del trailer no puede estar vacio")
    .trim(),
    body("distribution")
    .notEmpty()
    .withMessage("La distribucion no puede estar vacia")
    .isString({
        min: 5,
        max: 100
    })
    .trim(),
    body("duration")
    .notEmpty()
    .withMessage("La duracion no puede estar vacia")
    .isString({
        min: 10,
        max: 300
    }),
    body("director")
    .notEmpty()
    .withMessage("El director no puede estar vacio")
    .isString({
        min: 5,
        max: 100
    })
    .trim()
    
]