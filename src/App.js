import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
// import Details from "./pages/Details";
>>>>>>> dc3a15d42acad625cd7663fc3af6326490e4e5bc
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
