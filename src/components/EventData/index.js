import React from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData() {
  return (
    <div className="columns">
      <div className="column is-2">
        <Date />
      </div>
      <div className="column is-4">
        <EventDetails />
      </div>
      <div className="column is-4 is-offset-2">
        <ResponseBtns />
      </div>
    </div>
  );
}
export default EventData;
