import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import authRouter from './routes/auth.routes.js';
import cinemaRouter from './routes/cinema.routes.js';
import moviesRouter from './routes/movies.routes.js';
import userRouter from './routes/user.routes.js';
import hallRouter from './routes/all.routes.js';
import genreRouter from './routes/genres.routes.js';
import emitionRouter from './routes/emition.routes.js';
import { environments } from './config/environments.js';
import { startDb } from './config/relations.js';

const app = express();

// Middleware

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes

app.use('/api/auth', authRouter);
app.use('/api/cinema', cinemaRouter);
app.use('/api/movie', moviesRouter);
app.use('/api/user', userRouter);
app.use('/api/hall', hallRouter);
app.use('/api/genre', genreRouter);
app.use('/api/emition', emitionRouter)

// initialize server
const PORT = environments.PORT;
app.listen(PORT, async () => {
  await startDb()
  console.log(`Server running on http://localhost:${PORT}`);
})