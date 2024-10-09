import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import jokeRoutes from './routes/jokeRoute.js';

dotenv.config();

//express server
const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//Routes
app.use('/', jokeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
