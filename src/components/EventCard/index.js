import React from "react";
import EventData from "../EventData";
import "./style.css";

function EventCard() {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="card p-4">
          <EventData />
        </div>
      </div>
    </div>
  );
}
export default EventCard;
