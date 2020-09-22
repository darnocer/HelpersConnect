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
              <div id={`heading${this.props.eventId}`}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    onClick={this.toggleIcon}
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse${this.props.eventId}`}
                    aria-expanded="true"
                    aria-controls={`collapse${this.props.eventId}`}>
                    <i className="fas fa-info-circle"></i> Description{" "}
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </h5>
              </div>

              <div
                id={`collapse${this.props.eventId}`}
                className="collapse show details"
                aria-labelledby={`heading${this.props.eventId}`}
                data-parent="#accordion">
                <div className="description card-body">
                  <p className="description">
                    {this.props.description}{" "}
                    {this.props.attachments
                      ? this.props.attachments.map((item) => {
                          return (
                            <a href={item.fileUrl} target="_blank">
                              <i className="fas fa-paperclip"></i>
                            </a>
                          );
                        })
                      : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop">
          <p className="description">
            {this.props.description}{" "}
            {this.props.attachments
              ? this.props.attachments.map((item) => {
                  return (
                    <a href={item.fileUrl} target="_blank">
                      <i className="fas fa-paperclip"></i>
                    </a>
                  );
                })
              : null}
          </p>
        </div>
      </>
    );
  }
}

export default EventDescription;
