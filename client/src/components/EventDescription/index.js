import React, { Component } from "react";
import "./style.css";

class EventDescription extends Component {
  toggleIcon = (e) => {
    const icon = e.target.lastChild;
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  };

  render(props) {
    return (
      <>
        <div className="mobile">
          <div className="accordion" id="accordion">
            <div className="description-card">
              <div id={`heading${this.props.id}`}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    onClick={this.toggleIcon}
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse${this.props.id}`}
                    aria-expanded="true"
                    aria-controls={`collapse${this.props.id}`}>
                    <i className="fas fa-info-circle"></i> Description{" "}
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </h5>
              </div>

              <div
                id={`collapse${this.props.id}`}
                className="collapse show details"
                aria-labelledby={`heading${this.props.id}`}
                data-parent="#accordion">
                <div className="description card-body">
                  <p className="description">{this.props.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop">
          <p className="description">{this.props.description}</p>
        </div>
      </>
    );
  }
}

export default EventDescription;
