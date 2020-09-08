const express = require("express");
<<<<<<< HEAD

//passport
const GoogleStrategy = require("passport-google-oauth20").Strategy;
=======
const cookieSession = require("cookie-session");
>>>>>>> 6c3912f1b679bcd3fe2be09102f7554fc669f292
const passport = require("passport");
const mongoose = require("mongoose");
<<<<<<< HEAD
const routes = require("./routes/events");
=======
const bodyParser = require("body-parser");
const routes = require("./routes/events");
const keys = require("./config/keys");

require("./services/passport");

const db = require("./models/index");
>>>>>>> 6c3912f1b679bcd3fe2be09102f7554fc669f292

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 45 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
}

// Connect to the Mongo DB
mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || "mongodb://localhost/volunteercalendar"
);

//authentication
let GOOGLE_CLIENT_ID =
  "262257493602-atfp32r9ptkbf7l29tnrb09dmi3es5am.apps.googleusercontent.com";
let GOOGLE_CLIENT_SECRET = "ulMJ6xVCI5vEf4Drv0fkX2fG";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      //cb(null, profile.id);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["https://mail.google.com/"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate(
    "google",
    { successRedirect: "/auth/google" },
    { failureRedirect: "/" }
  ),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/");
  }
);
=======
  process.env.MONGODB_URI || "mongodb://localhost/volunteercalendar",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

require("./routes/authRoutes")(app);
app.use(routes);

const PORT = process.env.PORT || 3001;
>>>>>>> 6c3912f1b679bcd3fe2be09102f7554fc669f292

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
