import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/Error";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    let path = window.location.pathname.replace(/\/+$/, "");
    path = path[0] === "/" ? path.substr(1) : path;
    API.getUser({ userId: path }).then((res) => setUserData(res.data));
  };

  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/profile"
            render={() => <Profile userData={userData} />}
          />
          <Route
            exact
            path="/calendar"
            render={() => <Calendar userData={userData} />}
          />
          <Route
            exact
            path="*"
            render={() => <Calendar userData={userData} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
      <Navbar />
    </Router>
  );
}

export default App;
