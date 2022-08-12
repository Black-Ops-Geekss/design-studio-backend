"use strict'";

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const removeBG = require('./modules/removeBG/removeBG');
const getDesigns = require('./modules/unsplash/getDesigns');
const userInfo = require('./modules/userInfo/userInfo');

const app = express();
app.use(cors());
mongoose.connect(`mongodb://localhost:27017/designs`);

app.get('/', (req, res) => {
    res.send('Hello from Black Ops Geeks');
});

app.get('/getDesigns', getDesigns);
app.get('/removeBG/:id', removeBG);

app.post('./userRequest', userInfo)

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    console.log(err);
});