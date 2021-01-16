'use strict';

// [START gae_node_request_example]
const contractHandler = require('./contractHandler.js');
const express = require('express');
const crypto = require('crypto');
const hmac = "asjdhg374y3uiewh";

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

app.get('/hash/:id', (req, res) => {
    let secret = req.params.id;

    let hash = crypto.createHmac("sha256", "thisismysecretkey").update(hmac).digest("hex");

    res.status(200).send(hash).end;
});

app.get('/vote/', (req, res) =>{
    console.log(data)
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

contractHandler.getStandings();

module.exports = app;

