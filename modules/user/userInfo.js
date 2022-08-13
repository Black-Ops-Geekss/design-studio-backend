"use strict";

const SaveDesigns = require('../unsplash/schema');


function userInfo(req, res) {

    const userInfo = req.body;
    console.log(userInfo);
    const newDesign = new SaveDesigns({
        category: "UserInfo",
        title: "ContactInfo",
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone
    });
    newDesign.save();

    console.log(newDesign);
    res.send(`Thanks for your request ${userInfo.name}`);
}
module.exports = userInfo;


// take the user information from the front end form as a request body and save it in to the database