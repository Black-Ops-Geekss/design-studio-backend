
const SaveOrder = require('./contactSchema');

function sendOrders (req, res) {
  SaveOrder.find({}, (error, data) => {
    if (error) console.log(`error reading from the db: ${error}`);
    else res.send(data);
}).catch(err => {
    console.log(err);
}
);
}
module.exports = sendOrders;