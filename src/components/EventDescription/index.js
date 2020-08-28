import React, { Component } from "react";
import "./style.css";

class EventDescription extends Component {
  toggleIcon = (e) => {
    const icon = e.target.lastChild;

    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");

    // if (icon.classList.contains("fa-chevron-down")) {
    //   icon.classList.remove("fa-chevron-down");
    //   icon.classList.add("fa-chevron-up");
    // } else {
    //   icon.classList.remove("fa-chevron-up");
    //   icon.classList.add("fa-chevron-down");
    // }
  };

  render() {
    return (
      <>
        <div className="mobile">
          <div className="accordion" id="accordion">
            <div className="description-card">
              <div id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    onClick={this.toggleIcon}
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    <i className="fas fa-info-circle"></i> Description{" "}
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show details"
                aria-labelledby="headingOne"
                data-parent="#accordion">
                <div className="description card-body">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </>
    );
  }
}

export default EventDescription;
