import express from 'express';
import axios from 'axios';
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(cors());

const instance = axios.create({
  baseURL: 'https://www.bungie.net/Platform/',
  timeout: 1000,
  headers: {'x-api-key': process.env.X_API_KEY}
});

app.get('/', (req, res) => { 
 res.send("<h1>Home page</h1>");
});

app.get('/users', (req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10')
    .then(response => {
      res.send(response.data);
    });
})

app.get('/bungietest', (req, res) => {
  instance.get('Destiny2/SearchDestinyPlayer/-1/Native/')
    .then(response => {
      res.send(response.data)
    })
    .catch(function(error) {
      console.log(error);
      res.send(error)
    })
});

app.listen(3000, () => {
 console.log('server started on port 3000');
});
