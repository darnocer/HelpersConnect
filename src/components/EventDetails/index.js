import React from "react";
// import EventDescription from "../EventDescription";
import "./style.css";

function EventDetails(props) {
  return (
<<<<<<< HEAD
    <>
      <div className="col-8">
        <div className="event-details">
          <h2 className="text-uppercase is-size-6">
            <strong>
              <span className="event-name">Event Name</span>
            </strong>
          </h2>
          <ul className="list-inline">
            <li className="list-inline-item">
              <i className="far fa-calendar-alt"></i>{" "}
              <span className="day-of-week">Monday</span>
            </li>
            <li className="list-inline-item">
              <i className="far fa-clock"></i>{" "}
              <span className="start-time">6:00PM</span> -{" "}
              <span className="end-time">8:00PM</span>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span className="location">Location</span>
            </li>
          </ul>
        </div>
        <EventDescription />
=======
    <div className="col-8">
      <div className="event-details">
        <h2 className="text-uppercase is-size-6">
          <strong>
  <span className="event-name">{props.title}</span>
          </strong>
        </h2>
        <ul className="list-inline">
          <li className="list-inline-item">
            <i className="far fa-calendar-alt"></i>{" "}
            <span class="day-of-week">Monday</span>
          </li>
          <li className="list-inline-item">
            <i className="far fa-clock"></i>{" "}
            <span className="start-time">{props.start}</span> -{" "}
            <span className="end-time">{props.end}</span>
          </li>
          <li className="list-inline-item">
            <i className="fas fa-map-marker-alt"></i>{" "}
          <span className="location">{props.location}</span>
          </li>
        </ul>
        <p className="description">
          {props.description}
        </p>
>>>>>>> 2d4a6ad77a3a29d363bdb0a62732183643ec3275
      </div>
</div>
  );
}
export default EventDetails;
