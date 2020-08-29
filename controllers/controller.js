const db = require("../models");

module.exports = {

    //define methods for controller
    
    findAllEvents: function(req,res) {

        db.Event
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


}