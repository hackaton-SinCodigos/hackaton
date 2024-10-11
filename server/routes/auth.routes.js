import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth.controllers.js';
import { loginUserSchema, registerUserSchema } from '../models/schemas/user.schemas.js';
import { validator } from '../middleware/validator.js';

const authRouter = Router();

authRouter.post('/register', registerUserSchema, validator, registerUser)
authRouter.post('/login', loginUserSchema, validator, loginUser)

export default authRouter;