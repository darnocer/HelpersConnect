import React from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData() {
  return (
    <div className="container">
      <div className="row row-striped">
        <div className="col-2 text-right">
          <Date />
        </div>
        <div className="col-7">
          <EventDetails />
        </div>
        <div className="col-3">
          <ResponseBtns />
        </div>
      </div>
    </div>
  );
}
export default EventData;
