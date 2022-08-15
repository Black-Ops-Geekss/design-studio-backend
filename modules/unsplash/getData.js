const SaveDesigns = require( './schema' );




function getData ( req, res ) {
    SaveDesigns.find( {}, ( error, data ) => {
        if ( error ) console.log( `error reading from the db: ${error}` );
        else res.send( data );
    } ).catch( err => {
        console.log( err );
    }
    );
}
module.exports = getData;