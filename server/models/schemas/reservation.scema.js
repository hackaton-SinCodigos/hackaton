import {body} from "express-validator";

export const reservationSchema = [
    body("resState")
    .isIn(["pendiente", "cancelado"])
    .withMessage("El estado de la reservacion solo puede ser 'pendiente' o 'cancelado'")
    .notEmpty()
    .withMessage("El estado de la reservacion no puede estar vacio")
    .trim()
]