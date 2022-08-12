"use strict";

function userInfo(req, res) {
    console.log(req.body);
    res.send('Thanks for your request');
}
module.exports = userInfo;


// take the user information from the front end form as a request body and save it in to the database