const SaveDesigns = require( './schema' );




function getSelection ( req, res ) {
    const id = req.params.id;
    SaveDesigns.find( { _id: id }, ( error, data ) => {
        if ( error ) console.log( `error reading from the db: ${error}` );
        else res.send( data );
    } ).catch( err => {
        console.log( err );
    }
    );
}
module.exports = getSelection;