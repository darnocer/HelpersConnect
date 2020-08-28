import React from "react";
import EventData from "../EventData";
import "./style.css";

function EventCard() {
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="card p-4 row-striped event-card">
          <EventData />
        </div>
      </div>
    </div>
  );
}
export default EventCard;