import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Calendar} />
          <Route exact path="/Calendar" component={Calendar} />
        </Wrapper>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
