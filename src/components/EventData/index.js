import React from "react";
import Date from "../Date";
import CalData from "../CalData";
import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData() {
  return (
    <div className="row">
      <Date />
      <EventDetails />
      <ResponseBtns />
    </div>
  );
}
export default EventData;
