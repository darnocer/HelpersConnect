const express = require("express");

//passport
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const mongoose = require("mongoose");
const routes = require("./routes/events")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/volunteercalendar");

//authentication
let GOOGLE_CLIENT_ID = "262257493602-atfp32r9ptkbf7l29tnrb09dmi3es5am.apps.googleusercontent.com"
let GOOGLE_CLIENT_SECRET = "ulMJ6xVCI5vEf4Drv0fkX2fG"


passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/callback",
  scope: ['profile', 'email']

},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile);
   //cb(null, profile.id);
}
));


app.get('/auth/google',
  passport.authenticate('google', { scope: ["https://mail.google.com/"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google',{successRedirect: '/auth/google'},{ failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
    
  });


app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });