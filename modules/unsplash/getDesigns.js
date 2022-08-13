"use strict";

require('dotenv').config();
const axios = require('axios');
const SaveDesigns = require('./schema');

function getDesigns (req,res){


    const designCategory = req.query.category;

            axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: `${designCategory}`,
                    page: 1,
                    per_page: 5,
                    client_id: `${process.env.UNSPLASH_KEY}`,
                    response_type: 'json',
                    redirect_uri: `urn:ietf:wg:oauth:2.0:oob`
                }
            })
            .then(response => {

                
                let designsArr = response.data.results.map(design => new SaveDesigns({
                        category: designCategory,
                        title: design.tags[0]?.title,
                        url: design.urls.small
                    }))

                designsArr.forEach(design=> design.save());
                SaveDesigns.find({}, (error, data) => {
                    if (error) console.log(`error reading from the db: ${error}`);
                    else res.send(data);
                })
            }).catch(err => {
                console.log(err);
            }
            );
    }

module.exports = getDesigns;