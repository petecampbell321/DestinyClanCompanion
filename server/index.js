const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

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
  axios.get('https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/NTIVE/', {
    headers: {
      'x-api-key': 'e38719a7f81d474cafda1abe30c66b2d'
    }
  })
    .then(response => {
      res.send(response.data)
    });
});

app.listen(3000, () => {
 console.log('server started on port 3000');
});
