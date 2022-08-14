"use strict";

const SaveOrder = require('./contactSchema');


function userInfo(req, res) {

    const {newOrder} = req.body;
    console.log(newOrder);

    const order = new SaveOrder(newOrder);
    order.save();

    console.log();
    SaveOrder.find({}, (error, data) => {
        if (error) console.log(`error reading from the db: ${error}`);
        else res.send(data);
    }).catch(err => {
        console.log(err);
    }
    );
}

module.exports = userInfo;


// take the user information from the front end form as a request body and save it in to the database