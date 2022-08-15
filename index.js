'use strict';


// Dotenv
require('dotenv').config();


// Express 
const express = require('express');
const app = express();
app.use(express.json());


// MongoDB
const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URI}`);


// Cors for cross-origin
const cors = require('cors');
app.use(cors());



// Modules import
const getDesigns = require('./modules/unsplash/getDesigns');
const getData = require('./modules/unsplash/getData');
const getSelection = require('./modules/unsplash/getSelection');
const userInfo = require('./modules/user/userInfo');
const sendOrders = require('./modules/user/sendOrders');
const deleteDesign = require('./modules/admin/deleteDesign');
const updateDesign = require('./modules/admin/updateDesign');
const deleteOrder = require('./modules/admin/deleteOrder');



// Check for alive 
app.get('/', (req, res) => {
    res.send('Hello from Black Ops Geeks');
});


// Initialize the database 
app.get('/getDesigns', getDesigns);




// Get all designs or single design by ID
app.get('/getCategories', getData);
app.get('/getSelection/:id', getSelection);





// User info and orders 
app.post('/userRequest', userInfo);
app.get('/sendOrders', sendOrders);


// Admin delete and edit design data , admin delete order
app.delete('/deleteDesign/:id', deleteDesign)
app.put('/editDesign/:id', updateDesign);
app.delete('/deleteOrder/:id', deleteOrder)

// Port listen 
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    console.log(err);
});