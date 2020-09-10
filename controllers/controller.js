const db = require("../models");

module.exports = {
  //define methods for controller

  findAllEvents: function (req, res) {
    db.Event.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  addEvent: function (req, res) {
    console.log("event id: " + req.body.id);
    console.log("user id: " + req.user._id);

    db.User.updateOne(
      { _id: { _id: req.user._id } },
      { $push: { accepted_events: req.body.id } }
    )
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // findById: function (req, res) {
  //   db.User.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
