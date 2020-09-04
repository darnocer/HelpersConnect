import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import NotFound from "./pages/Error";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/calendar" component={Calendar} />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
      <Navbar />
    </Router>
  );
}

export default App;
