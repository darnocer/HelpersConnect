import React from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";

function EventData({
  start,
  end,
  title,
  description,
  location,
  eventId,
  user,
  handleBtnClick,
  userData,
}) {
  function eventAccepted() {
    const eventsArr = userData.accepted_events;
    if (eventsArr.includes(eventId)) {
      return true;
    }
    return false;
  }

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
