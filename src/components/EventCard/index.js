import React from "react";
import EventData from "../EventData";
import "./style.css";

function EventCard(props) {
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="card p-4 row-striped event-card">
          <EventData 
          title = {props.title}
          start = {props.start}
          end = {props.end}
          description = {props.description}
          location = {props.location}/>
        </div>
      </div>
    </div>
  );
}
export default EventCard;
