'use strict';

const express = require('express');
const request = require('request-promise-native')

// Constants
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';
const app = express();

// App
app.get('/', (req, res) => {
  request({
    method: 'GET',
    uri: 'http://service1:3000',
    json: true
  })
    .then((body) => res.json(body))
    .catch((err) => next(err))
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
