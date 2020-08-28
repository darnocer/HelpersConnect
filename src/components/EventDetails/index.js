import React from "react";
import EventDescription from "../EventDescription";
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
  <span className="event-name">{props.summary}</span>
          </strong>
        </h2>
        <ul className="list-inline">
          <li className="list-inline-item">
            <i className="far fa-calendar-alt"></i>{" "}
            <span class="day-of-week">Monday</span>
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
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
>>>>>>> dc3a15d42acad625cd7663fc3af6326490e4e5bc
      </div>
    </>
  );
}
export default EventDetails;
