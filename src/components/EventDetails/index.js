import React from "react";
import "./style.css";

function EventDetails() {
  return (
    <div className="event-details p-3">
      <h2 className="event-name">Event Name</h2>
      <h3 className="event-time">
        <i class="far fa-clock"></i> Event Time
      </h3>
      <h3 className="event-location">
        <i class="fas fa-map-marker-alt"></i> Event Location
      </h3>
    </div>
  );
}
export default EventDetails;
