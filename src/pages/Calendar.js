import React, { Component } from "react";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <EventCard />
        <Navbar />
      </>
    );
  }
}
