"use strict";

const mongoose = require('mongoose');

const NewCategory = new mongoose.Schema({
    category: String,
    title: String,
    url: String,
    name: String,
    email: String,
    phone: String
})

const SaveDesigns = mongoose.model('designs', NewCategory)

module.exports = SaveDesigns;