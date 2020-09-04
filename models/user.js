const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email : {type:String, required: true},
  picture: {type:String, require:true},
  admin : {type: Boolean, default: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;