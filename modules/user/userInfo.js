"use strict";

const SaveOrder = require('./contactSchema');


function userInfo(req, res) {

    const {newOrder} = req.body;
    console.log(newOrder);

    const order = new SaveOrder(newOrder);
    order.save();

    console.log();
    res.send(`Thanks for your request ${newOrder.name}`);
}

module.exports = userInfo;


// take the user information from the front end form as a request body and save it in to the database