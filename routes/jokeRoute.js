import express from 'express';
import { searchJokes, favoriteJoke, getFavorites } from '../controllers/jokeController.js';

const router = express.Router();

router.get('/', searchJokes);
router.post('/favorite', favoriteJoke);
router.get('/favorites', getFavorites);

export default router;
