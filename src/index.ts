import dotenv from 'dotenv';
import app from './app';

// start express server

dotenv.config(); // variables de entorno

const PORT = process.env.PORT || 3000; // si no está definido le asignamos port 3000

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);