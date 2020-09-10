const db = require("../models");

module.exports = {
  //define methods for controller

  findAllEvents: function (req, res) {
    db.Event.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // update: function (req, res) {
  //   console.log(req.params.id);
  //   console.log(req.user.id);

  //   db.User.updateOne(
  //     { _id: req.user.id },
  //     { $push: { accepted_events: req.params.id } }
  //   )
  //     .then((dbModel) => {
  //       res.json(dbModel);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // },

  update: function (req, res) {
    console.log(req.params.id);
    console.log(req.user.id);

    db.User.update(
      { _id: req.user.id },
      {
        $push: { accepted_events: req.params.id },
      }
    )
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
