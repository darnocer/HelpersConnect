const express = require("express");

const cookieSession = require("cookie-session");

//passport
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const mongoose = require("mongoose");
const routes = require("./routes/events")

const db = require("./models/index")

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

//middleware, using cookies to handle authentication
app.use(
  //call cookieSession and provide a configuration object, 1st property is how long this cookie can exist in the browser before it expires.2nd property is a key that will be used to encrypt cookie
  cookieSession({
    //we want the cookie to last 45 days
    maxAge: 45 * 24 * 60 * 60 * 1000,
    //passed in from keys file
    keys: "laskjdflkjasdlkf"
  })
);

//authentication
let GOOGLE_CLIENT_ID = "262257493602-atfp32r9ptkbf7l29tnrb09dmi3es5am.apps.googleusercontent.com"
let GOOGLE_CLIENT_SECRET = "ulMJ6xVCI5vEf4Drv0fkX2fG"


passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  scope: ['profile', 'email']

},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile);

  console.log(profile.name.givenName)
  console.log(profile.name.familyName)
  console.log(profile.emails[0].value)
  console.log(profile.photos[0].value)


  userProfile = {

    first_name: profile.name.givenName,
    last_name: profile.name.familyName,
    email: profile.emails[0].value,
    picture: profile.photos[0].value,
    admin: false
  }
  //find one //conditional
  db.User.collection.insertOne(userProfile)
  .then(data => {
    console.log("User inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  
}));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get("/auth/google/callback", passport.authenticate("google"), 

  (req,res) => { res.redirect("/Calendar")}

);


app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });