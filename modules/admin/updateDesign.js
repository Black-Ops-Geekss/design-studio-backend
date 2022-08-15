const SaveDesigns = require( '../unsplash/schema' );




function updateDesign ( req, res ) {
    const id = req.params.id;
    const { data } = req.body;
    SaveDesigns.findByIdAndUpdate( id, data, { new: true } ).then( record => {
        res.send( record );
    } ).catch( err => {
        res.status( 500 ).send( err.message );
    } );
}

module.exports = updateDesign;