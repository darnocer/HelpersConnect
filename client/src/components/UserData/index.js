import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const Typography = styled.div`
  a {
    color: var(--primary-color);
  }

  a:hover {
    color: var(--accent-color);
    text-decoration: none;
  }
`;

function UserData({ email, picture, eventCnt }) {
  return (
    <div className="columns is-centered mt-5">
      <div className="column is-two-thirds">
        <div className="card p-4">
          <Row>
            <Col xs={3}>
              <img
                src={picture}
                alt="user profile pic"
                className="img-fluid rounded-circle"
              />
            </Col>
            <Typography>
              <Col>
                <h2>
                  Welcome,{" "}
                  <b>
                    <span id="userEmail">{email}</span>
                  </b>
                  !
                </h2>
                <h3>
                  You are attending{" "}
                  <b>
                    <span id="eventCount">{eventCnt()}</span>
                  </b>{" "}
                  events.
                </h3>
                <br></br>
                <br></br>
                <a href="#">Sign Out</a>
              </Col>
            </Typography>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default UserData;
