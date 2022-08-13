const SaveDesigns = require('../unsplash/schema');

function userDesign (req,res) {
    const userUrl = req.body.userUrl;
    const newDesign = new SaveDesigns({
        category: "Random",
        title: "UserDesign",
        url: userUrl
    });
    newDesign.save();
    res.status(201).json(newDesign)
  }
  
module.exports = userDesign;
