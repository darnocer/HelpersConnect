import React from "react";
import { Row, Col } from "reactstrap";

function UserData() {
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="card p-4">
          <Row>
            <Col>
              <img src="https://via.placeholder.com/150" />
            </Col>
            <Col>
              <h2>
                Welcome, <span id="userEmail">darnocer@gmail.com</span>!
              </h2>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default UserData;
