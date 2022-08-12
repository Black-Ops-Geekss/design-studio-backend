"use strict";

require('dotenv').config();
const FormData = require('form-data');
const fs = require('fs');

const axios = require('axios');

const SaveDesigns = require('../unsplash/schema');

function removeBG(req, res) {

    const id = req.params.id;
    SaveDesigns.find({"_id": id }, (err,data) =>{
        if (err) console.log(`error finding the cat in the db: ${error}`);
        else {
            const formData = new FormData();
            formData.append('size', 'auto');
            formData.append('image_url', `${data[0].url}`);
            axios({
                method: 'post',
                url: 'https://api.remove.bg/v1.0/removebg',
                data: formData,
                responseType: 'arraybuffer',
                headers: {
                    ...formData.getHeaders(),
                    'X-Api-Key': `${process.env.REMOVE_BG_KEY}`,
                },
                encoding: null
            })
                .then((response) => {
                    if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                    fs.writeFileSync("./modules/removeBG/no-bg.png", response.data);
                    res.send('done')
                })
                .catch((error) => {
                    res.send(error)
                });
        }   
    }
    )
}

module.exports = removeBG;