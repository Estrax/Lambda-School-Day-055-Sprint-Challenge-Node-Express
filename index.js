// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const express = require('express');
const initMiddleware = require('./src/serverMiddleware');
require('dotenv').config();

const app = express();
initMiddleware(app);

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on ${HOSTNAME} on port ${PORT}`);
});