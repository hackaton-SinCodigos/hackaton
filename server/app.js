import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';

const app = express();

// Middleware

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// initialize server

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})