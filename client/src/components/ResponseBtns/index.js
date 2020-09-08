import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  @media only screen and (min-width: 768px) {
    .button {
      font-size: 1.5rem;
    }
  }

  .accept i {
    color: var(--primary-color);
  }

  .decline i {
    color: var(--accent-color);
  }

  .button {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

function ResponseBtns(props) {
  return (
    <div className="col-2">
      <div className="has-text-centered mt-4">
        <Buttons>
          {props.accepted ? (
            <button className="button decline">
              <i className="far fa-calendar-times"></i>
            </button>
          ) : (
            <button className="button accept">
              <i className="far fa-calendar-check"></i>
            </button>
          )}
        </Buttons>
      </div>
    </div>
  );
}
export default ResponseBtns;
