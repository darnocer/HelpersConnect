import React from "react";
import { Row, Col, Link } from "reactstrap";
import styled from "styled-components";

const Image = styled.div`
  img {
    border-radius: 50%;
  }
`;

function UserData() {
  return (
    <div className="columns is-centered mt-5">
      <div className="column is-two-thirds">
        <div className="card p-4">
          <Row>
            <Image>
              <Col>
                <img src="https://via.placeholder.com/150" />
              </Col>
            </Image>
            <Col>
              <h2>
                Welcome, <span id="userEmail">darnocer@gmail.com</span>!
              </h2>
              <a href="#">Sign Out</a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default UserData;
