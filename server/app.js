import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import { environments } from './config/environments.js';
import { startDb } from './config/relations.js';
import authRouter from './routes/auth.routes.js';

const app = express();

// Middleware

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes

app.use('/api/auth', authRouter)

// initialize server
const PORT = environments.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  startDb()
})