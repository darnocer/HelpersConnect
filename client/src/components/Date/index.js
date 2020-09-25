import React, { Component } from "react";
import "./style.css";
import moment from "moment";
import { Badge } from "reactstrap";

class Date extends Component {
  render() {
    return (
      <div className="col-2 overflow-hidden justify-content-center">
        <Badge className="date">
          <h1>
            {moment(this.props.start).format("MMM") ===
            moment(this.props.end).format("MMM") ? (
              <>
                <span className="month">
                  {moment(this.props.start).format("MMM")}
                </span>
                <br></br>
              </>
            ) : (
              <>
                <span className="month text-left">
                  {moment(this.props.start).format("MMM")}
                </span>
                {"   "}
                <span className="month text-right">
                  {moment(this.props.end).format("MMM")}
                </span>
                <br></br>
              </>
            )}
            <span className="day">{moment(this.props.start).format("DD")}</span>

            <span className="day">
              {moment(this.props.start).format("MMDDYY") ===
              moment(this.props.end).format("MMDDYY")
                ? null
                : "-" + moment(this.props.end).format("DD")}
            </span>
          </h1>
        </Badge>
      </div>
    );
  }
}
export default Date;
