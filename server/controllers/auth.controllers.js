import { createUser, getUserByEmail, getUserByEmailAndPassword } from '../service/user.service.js';
import { createJWT } from '../helper/jsonwebtoken.js';

export const registerUser = async (req, res) => {
  try {
    const user = req.body;

    const existingUser = await getUserByEmail(user.email)
    if (existingUser) {
      return res.status(409).send({ message: 'Este email ya esta registrado' });
    }
    
    const newUser = await createUser(user);

    const token = await createJWT({id: newUser.id})
    
    res.status(201).json({token: token});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).send({ message: 'Credenciales incorrectas' });
    }

    // Generar el token JWT
    const token = createJWT({ user: user.id });

    const data = {
      token,
    };

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}