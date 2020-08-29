import React from "react";
import "./style.css";
import moment from 'moment'

function Date(props) {
  return (
    <div className="col-2 overflow-hidden justify-content-center">
      <div className="date has-text-centered">
        <h1>
  <span className="month">{moment(props.start).format('MMM')}</span>
          <br></br>
  <span className="day">{moment(props.start).format('DD')}</span>
        </h1>
      </div>
    </div>
  );
}
export default Date;
