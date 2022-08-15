"use strict";

const SaveOrder = require( './contactSchema' );


function userInfo ( req, res ) {
    const { newOrder } = req.body;
    const order = new SaveOrder( newOrder );
    order.save();
    res.send( `Thanks for your request ${newOrder.name}` );
}

module.exports = userInfo;