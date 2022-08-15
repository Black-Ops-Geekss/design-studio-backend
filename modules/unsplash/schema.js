"use strict";

const mongoose = require('mongoose');

const NewCategory = new mongoose.Schema({
    category: String,
    title: String,
    url: String,
    price : String
})

const SaveDesigns = mongoose.model('designs', NewCategory)

module.exports = SaveDesigns;