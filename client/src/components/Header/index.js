import React from "react";

import styled from "styled-components";

const Heading = styled.header`
  /* hide hr border on screens larger than mobile  */
  @media only screen and (min-width: 768px) {
    hr {
      display: none;
    }
  }

  /* line under header  */
  hr {
    border-top: 2px solid var(--accent-color);
  }
`;

function Header() {
  return (
    <Heading>
      <header className="my-4">
        <h1 className="title is-1 has-text-centered">
          Volunteer Calendar <i class="fas fa-hands-helping"></i>
        </h1>
        <hr />
      </header>
    </Heading>
  );
}

export default Header;
