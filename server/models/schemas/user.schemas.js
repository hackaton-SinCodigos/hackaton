import { body } from 'express-validator';

export const registerUserSchema = [
  body('userName')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('el nombre de usuario no debe estar vacio')
    .isLength({min: 5, max: 20})
    .withMessage(
      'El nombre de usuario debe tener un minimo de 5 caracteres y un maximo de 20.'
    ),
  body('email')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('El email no debe estar vacio')
    .isEmail()
    .withMessage('El email debe tener formato de correo valido.'),
  body('password')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('La contraseña no debe estar vacia')
    .isString()
    .isLength({min: 8, max: 20})
    .withMessage('Debe tener un mínimo de 8 caracteres y un máximo de 20.'),
]

export const loginUserSchema = [
  body('email')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('El email no debe estar vacio.')
    .isEmail()
    .withMessage('El email debe tener formato de correo valido.'),
  body('password')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('La contraseña no debe estar vacia.')
    .isString()
    .isLength({min: 8, max: 20})
    .withMessage('Debe tener un mínimo de 8 caracteres y un máximo de 20.'),
];