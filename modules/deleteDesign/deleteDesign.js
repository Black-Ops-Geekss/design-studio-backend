const SaveDesigns = require('../unsplash/schema');

function deleteDesign (req,res){
    const id = req.params.id;
    console.log(id)
    SaveDesigns.findByIdAndDelete(id).then(sendRec =>{
      res.send(sendRec);
    }).catch (error => {
      res.send(error)
    })
  }

  module.exports = deleteDesign;