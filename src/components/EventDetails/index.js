import React from "react";
import "./style.css";

function EventDetails() {
  return (
    <div className="event-details">
      <h2 className="text-uppercase">
        <strong>
          <span className="event-name">Event Name</span>
        </strong>
      </h2>
      <ul className="list-inline">
        <li className="list-inline-item">
          <i className="far fa-calendar-alt"></i>{" "}
          <span class="day-of-week">Monday</span>
        </li>
        <li className="list-inline-item">
          <i className="far fa-clock"></i>{" "}
          <span className="start-time">6:00 PM</span> -{" "}
          <span className="end-time">8:00 PM</span>
        </li>
        <li className="list-inline-item">
          <i className="fas fa-map-marker-alt"></i>{" "}
          <span className="location">Location</span>
        </li>
      </ul>
      <p className="details">
        Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
export default EventDetails;
