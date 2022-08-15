const mongoose = require( 'mongoose' );




const NewOrder = new mongoose.Schema( {
    name: String,
    email: String,
    phone: String,
    items: Array
} );

const SaveOrder = mongoose.model( 'orders', NewOrder );

module.exports = SaveOrder;