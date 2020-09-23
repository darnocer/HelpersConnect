import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  @media only screen and (min-width: 768px) {
    .button {
      font-size: 1.5rem;
    }
  }

  .button {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 0px 10px 0px 10px;
    min-width: 60px;
  }

  .rsvp {
    font-size: 0.7em;
    font-weight: bold;
  }

  .rsvp:hover {
    color: var(--accent-color);
  }

  .fa-check {
    color: green;
    font-size: 0.8em;
  }
`;

const Confirmation = styled.div`
  .confirmed {
    opacity: 0;
    font-size: 0.8rem;
    color: var(--accent-color);
    font-weight: bold;
    animation-name: confirmed;
    animation-duration: 3s;
    animation-iteration-count: 1;
  }

  @keyframes confirmed {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

function ResponseBtns(props) {
  return (
    <div className="col-2">
      <div className="has-text-centered mt-4">
        <Buttons>
          {props.accepted === true ? (
            <button className="button is-medium decline">
              <i className="fas fa-check" id={props.eventId}></i>
            </button>
          ) : (
            <button
              className="button accept"
              id={props.eventId}
              onClick={props.handleBtnClick}>
              <span className="rsvp" id={props.eventId}>
                RSVP
              </span>
            </button>
          )}
        </Buttons>
        <br></br>
        <Confirmation>
          {props.accepted === true ? (
            <span className="confirmed">You're going!</span>
          ) : null}
        </Confirmation>
      </div>
    </div>
  );
}
export default ResponseBtns;
