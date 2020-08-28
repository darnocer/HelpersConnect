import React from "react";
import Date from "../Date";
// import EventDetails from "../EventDetails";
import CalData from "../CalData"
import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData() {
  return (
    <div className="container">
      <div className="row">
        <Date />
        <CalData />
        <ResponseBtns />
      </div>
    </div>
  );
}
export default EventData;
