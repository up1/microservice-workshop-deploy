'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';
const app = express();

// App
app.get('/', (req, res) => {
  res.json({
    name: 'Service 3 on ' + os.hostname
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);