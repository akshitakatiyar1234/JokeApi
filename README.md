# Joke API

**Features**
1. View jokes
2.Add joke to your favorite List
3.View favorite Jokes

**Requirements**
To run this project, ensure that you have the following:
  1. "axios"
  2. "body-parser"
  3."dotenv"
  4. "ejs"
  5. "express"
  6. "mysql2"
    

**Commands and Steps**
1.Clone the repository
2.Install the dependencies: npm install
3.Create a .env file in the root directory and add your environment variables:
DB_HOST=localhost
DB_USER=''
DB_PASSWORD=''
DB_NAME=''
API_URL=https://icanhazdadjoke.com/
5.create a table name jokes which will store the data
   CREATE TABLE jokes (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     joke_id VARCHAR(255) NOT NULL,
    ->     joke_text TEXT,
    ->     joke_image_url TEXT
    -> );
4.Start the server: node server.js

**Technologies Used**
Node.js - Backend JavaScript runtime environment
Express - Web framework for Node.js
MySql - Database


**Author**
Akshita Katiyar
