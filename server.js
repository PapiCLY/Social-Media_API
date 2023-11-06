const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose'); //mongoose initialized
const routes = require('./routes');
const db = require('./config/connection');
const PORT = process.env.PORT || 2641;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once('open', () => { //.once() is a mongoose method which indicates the connetion to mongodb is made
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});
});