
## Updates made in `master` for deployment

---

### server.js

1. Add `const path = require("path");` at the top

2. Add `useFindAndModify: false` to `mongoose.connect()`:

```
 mongoose.connect(
  process.env.MONGODB*URI || "mongodb://localhost/volunteercalendar",	  process.env.MONGODB*URI || "mongodb://localhost/volunteercalendar",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }	  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);	);
```

3. The only statement in the "production" codeblock should be `app.use(express.static("client/build"))` and the star (\*) route should be outside of that statement:

```
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);
```

### services/passport.js

4. Update clientId and clientSecret with `process.env`:

```
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientId || keys.googleClientId,
      clientSecret: process.env.googleClientSecret || keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
```

### config/keys.js

5. Update to use the "test" OAuth app Id and Secret:

```
  googleClientId:
    "936083348735-2s0l5k1ekimcg96cggqtbb7rqgsp7msc.apps.googleusercontent.com",
  googleClientSecret: "Ta45MdhDTox2VE3b5aB7x3J4",
  cookieKey: "ldskfjlkdfjxlkvjcj",
```

### client/package.json

6. Remove `"proxy": "http://localhost:3001",`

### client/src/setupProxy.js

7. Comment out the entire file

## To Test Locally:

1. Uncomment out **setupProxy.js**

2. Add `"proxy": "http://localhost:3001"`, to **client/package.json**

## Deploying New Commits

- **Be sure to comment out setupProxy again and and add the proxy to 3001 back and push that to your branch prior to submitting a pull request**

- TEST the full app before submitting a pull request and make sure nothing is broken

- Reviewer should verify the above before approving the pull request

- Reviewer merge pull request as normal

- `git push heroku master` to deploy new changes after merge

