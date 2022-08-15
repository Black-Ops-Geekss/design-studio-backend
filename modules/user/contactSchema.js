"use strict";

const mongoose = require('mongoose');

const NewOrder = new mongoose.Schema({
    auth0Name: String,
    name: String,
    email: String,
    phone: String,
    items: Array
})

const SaveOrder = mongoose.model('orders', NewOrder)

module.exports = SaveOrder;