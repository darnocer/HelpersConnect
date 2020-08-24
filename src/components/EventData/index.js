import React from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData() {
  return (
    <div className="container">
      <div className="row">
        <Date />

        <EventDetails />

        <div className="col-3 test">
          <ResponseBtns />
        </div>
      </div>
    </div>
  );
}
export default EventData;
