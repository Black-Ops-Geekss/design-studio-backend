"use strict'";

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const removeBG = require('./modules/removeBG/removeBG');
const getDesigns = require('./modules/unsplash/getDesigns');
const userInfo = require('./modules/user/userInfo');
const deleteDesign = require('./modules/deleteDesign/deleteDesign');
const userDesign = require('./modules/user/userDesign');
const getData = require('./modules/unsplash/getData');
const getSelection = require('./modules/unsplash/getSelection');
const sendOrders = require('./modules/user/sendOrders');
const updateDesign = require('./modules/admin/updateDesign');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/designStore`);


app.get('/', (req, res) => {
    res.send('Hello from Black Ops Geeks');
});

app.get('/getDesigns', getDesigns);

app.get('/getSelection/:id', getSelection);

app.get('/removeBG/:id', removeBG);
app.get('/getCategories', getData);


app.post('/userRequest', userInfo);
app.get('/sendOrders', sendOrders);

app.post('/userDesign', userDesign);

app.delete('/deleteDesign/:id', deleteDesign)


app.put('/editDesign/:id', updateDesign);



const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    console.log(err);
});

// check if you server is connected to mongo Atlas via app.listen