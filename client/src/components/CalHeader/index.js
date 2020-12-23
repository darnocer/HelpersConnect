import React from "react";
import styled from "styled-components";

const Heading = styled.header`
  @media only screen and (min-width: 768px) {
    hr {
      display: none;
    }
  }

  hr {
    border-top: 2px solid var(--accent-color);
  }

  .logo-holder {
    text-align: center;
    max-width: 500px;
    margin: auto;
  }
`;

function CalHeader() {
  return (
    <Heading>
      <header className="logo-holder my-4">
        <img src={require("../../assets/logo.png")} alt="logo" class="logo" />
        <hr />
      </header>
    </Heading>
  );
}

export default CalHeader;
