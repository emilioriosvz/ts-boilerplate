import dotenv from 'dotenv';
import app from './app';

// start express server

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
