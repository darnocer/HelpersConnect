import React from "react";
import Date from "../Date";
import CalData from "../CalData";
import EventDetails from "../EventDetails";

import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData(props) {
  return (
    <div className="row">
      <Date start={props.start} end={props.end} />
      <EventDetails
        title={props.title}
        start={props.start}
        end={props.end}
        description={props.description}
        location={props.location}
      />
      <ResponseBtns />
    </div>
  );
}
export default EventData;
