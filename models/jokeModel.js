import connection from '../config/db.js'; 

//sVING JOKE IN FAVORITE TABLE
export const saveJoke = async (jokeId, jokeText, jokeImageUrl) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO jokes (joke_id, joke_text, joke_image_url) VALUES (?, ?, ?)';
        connection.query(query, [jokeId, jokeText, jokeImageUrl], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};


//FETCHING FAVORITE JOKES
export const getAllFavorites = async () => {
  return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM jokes'; // Adjust the query if you need specific fields
      connection.query(query, (error, results) => {
          if (error) {
              return reject(error);
          }
          resolve(results);
      });
  });
};
