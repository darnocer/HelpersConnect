const db = require("../models");

module.exports = {
  //define methods for controller

  findAllEvents: function (req, res) {
    db.Event.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  addEvent: function (req, res) {
    console.log(req.body);
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

      deleteEvent: function(req, res) {
        db.User.updateOne(
          { _id: { _id: req.user._id } }, 
          { $pull: { accepted_events: req.body.id } })
        .then((dbModel) => {
          res.json(dbModel);
        })
        .catch((err) => {
          res.json(err);
        });


      },
      getUser: function(req,res){
        db.User.findOne(
          {_id: {_id: req.user._id}})
          .then((dbModel) => {
            console.log(dbModel)
            res.json(dbModel)
          })
          .catch((err)=> {
            res.json(err)
          })
      
      },

      sendEvents: function(req,res){
        console.log(req.body)
        db.Event.create({
          event_name: req.body.summary,
          event_id: req.body.id,
          date: req.body.startTime,
          location:req.body.location,
          startTime:req.body.startTime,
          endTime: req.body.endTime,
          attending: ""
        })
        .then((dbModel) => {
          console.log(dbModel)
          res.json(dbModel)
        })
        .catch((err)=> {
          res.json(err)
        })
      }

  };
