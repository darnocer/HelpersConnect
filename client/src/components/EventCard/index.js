import React from "react";
import EventData from "../EventData";
import styled from "styled-components";

const accent = "var(--accent-color);";
const primary = "var(--primary-color);";

const Striped = styled.div`
  .striped {
    background-color: #ffffff;
    border-left: 5px solid;
    border-left-color: ${accent};
    padding: 15px 0;
  }

  .striped:hover {
    background-color: #ffffff;
    border-left: 5px solid;
    border-left-color: ${primary};
    padding: 15px 0;
  }
`;

function EventCard(props) {
  return (
    <Striped>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="card p-4 striped event-card">
            <EventData
              title={props.title}
              start={props.start}
              end={props.end}
              description={props.description}
              location={props.location}
            />
          </div>
        </div>
      </div>
    </Striped>
  );
}
export default EventCard;
