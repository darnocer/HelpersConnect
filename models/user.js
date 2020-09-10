const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  picture: { type: String },
  admin: { type: Boolean, default: false },
  googleId: String,
  accepted_events: [
    {
<<<<<<< HEAD
      type: String,
    }
  ]
=======
      id: {
        type: String,
      },
    },
  ],
>>>>>>> 05c4158c9622fdbd4352d5f82cb60e17c319198c
});

const User = mongoose.model("users", userSchema);

module.exports = User;
