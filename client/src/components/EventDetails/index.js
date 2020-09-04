import React from "react";
import EventDescription from "../EventDescription";
import "./style.css";
import moment from "moment";

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
              <span className="day-of-week">
                {moment(props.start).format("dddd")}
              </span>
            </li>
            <li className="list-inline-item">
              <i className="far fa-clock"></i>{" "}
              <span className="start-time">
                {moment(props.start).format("LT")}
              </span>{" "}
              -{" "}
              <span className="end-time">{moment(props.end).format("LT")}</span>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span className="location">{props.location}</span>
            </li>
          </ul>
          {props.description ? (
            <EventDescription id={props.id} description={props.description} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default EventDetails;
