"use strict";

require( 'dotenv' ).config();
const axios = require( 'axios' );
const SaveDesigns = require( './schema' );


async function getDesigns ( req, res ) {


    const designCategory = [ "galaxy", "jordan", "skeleton", "rose", "baby groot", "robot" ];

    designCategory.forEach( async ( cato ) => {
        const response = await axios.get( 'https://api.unsplash.com/search/photos', {
            params: {
                query: cato,
                page: 1,
                per_page: 2,
                client_id: `${process.env.UNSPLASH_KEY}`,
                response_type: 'json',
                redirect_uri: `urn:ietf:wg:oauth:2.0:oob`
            }
        } );
        const data = response.data.results;
        data.forEach( async ( design ) => {
            const newDesign = new SaveDesigns( {
                category: cato,
                title: design.description,
                url: design.urls.regular,
                price: '10 JD'
            } );
            newDesign.save();
        } );
    } );
    res.status( 201 ).json( designCategory );
}

module.exports = getDesigns;