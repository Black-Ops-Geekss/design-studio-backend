const SaveOrder = require( '../user/contactSchema' );




function deleteOrder ( req, res ) {
  const id = req.params.id;
  SaveOrder.findByIdAndDelete( id ).then( sendRec => {
    res.send( sendRec );
  } ).catch( error => {
    res.send( error );
  } );
}

module.exports = deleteOrder;