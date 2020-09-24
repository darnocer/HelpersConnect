const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  event_name: { type: String, required: true },
  event_id: {type: String, required: true, unique: true},
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  startTime: {type:String, required: true},
  endTime: {type:String, required: true},
  attending: {type:String}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;