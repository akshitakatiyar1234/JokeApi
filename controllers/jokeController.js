import axios from 'axios';
import { saveJoke, getAllFavorites } from '../models/jokeModel.js';
import dotenv from 'dotenv';

dotenv.config();

// Fetch jokes from the icanhazdadjoke API
export const searchJokes = async (req, res) => {
  const searchTerm = req.query.term;
  
  try {
    const response = await axios.get(`${process.env.API_URL}/search`, {
      headers: { Accept: 'application/json' },
      params: { term: searchTerm }
    });

    const jokes = response.data.results;
    res.render('index', { jokes });
  } catch (error) {
    res.status(500).send('Error fetching jokes');
  }
};

// Save a joke to the favorites list
export const favoriteJoke = async (req, res) => {
  const { jokeId, joke } = req.body;
  
  try {
    await saveJoke(jokeId, joke);
    res.redirect('/favorites');
  } catch (error) {
    res.status(500).send('Error saving joke');
  }
};

// Get all favorite jokes
export const getFavorites = async (req, res) => {
  try {
    const favorites = await getAllFavorites();
    res.render('favorites', { favorites });
  } catch (error) {
    res.status(500).send('Error retrieving favorites');
  }
};
