import React from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
// import CalData from "../CalData"
import ResponseBtns from "../ResponseBtns";
import "./style.css";

function EventData(props) {
  return (
    <div className="container">
      <div className="row">
        <Date                 
          start = {props.start}
          end = {props.end}/>
        <EventDetails 
          title = {props.title}
          start = {props.start}
          end = {props.end}
          description = {props.description}
          location = {props.location}
          id={props.id}/>
        <ResponseBtns />
      </div>
    </div>
  );
}
export default EventData;
