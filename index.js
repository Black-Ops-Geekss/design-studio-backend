"use strict'";

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const removeBG = require('./modules/removeBG/removeBG');
const getDesigns = require('./modules/unsplash/getDesigns');
const userInfo = require('./modules/user/userInfo');
const deleteDesign = require('./modules/deleteDesign/deleteDesign');
const userDesign = require('./modules/user/userDesign');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(`mongodb://localhost:27017/designs`);

app.get('/', (req, res) => {
    res.send('Hello from Black Ops Geeks');
});

app.get('/getDesigns', getDesigns);
app.get('/removeBG/:id', removeBG);

app.post('/userRequest', userInfo);
app.post('/userDesign', userDesign);

app.delete('/deleteDesign/:id', deleteDesign)


const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    console.log(err);
});

// check if you server is connected to mongo Atlas via app.listen