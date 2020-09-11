import React, { useState, useEffect } from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";
import API from "../../utils/API";

function EventData({
  start,
  end,
  title,
  description,
  location,
  eventId,
  user,
  userData,
}) {
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    eventAccepted();
  });

  function eventAccepted() {
    const eventsArr = userData.accepted_events;
    if (eventsArr.includes(eventId)) {
      return true;
    }
    return false;
  }

  const handleBtnClick = (e) => {
    API.addEvent({
      id: e.target.id,
    }).then(() => setAccept(eventAccepted()));
  };

  return (
    <div className="row">
      <Date start={start} end={end} />
      <EventDetails
        title={title}
        start={start}
        end={end}
        description={description}
        location={location}
        eventId={eventId}
        user={user}
      />
      <ResponseBtns
        eventId={eventId}
        handleBtnClick={handleBtnClick}
        accepted={eventAccepted}
      />
    </div>
  );
}
export default EventData;
