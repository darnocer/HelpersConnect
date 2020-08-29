import React from "react";
import EventDescription from "../EventDescription";
import "./style.css";

function EventDetails(props) {
  return (
    <>
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
              <span className="day-of-week">Monday</span>
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
          <EventDescription description={props.description} />
        </div>
      </div>
    </>
  );
}

export default EventDetails;
