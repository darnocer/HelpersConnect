import React from "react";
import axios from "axios";
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
}) {
  function confirmEvent(e) {
    console.log(e.target.id);
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
        doConfirm={confirmEvent}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
}
export default EventData;
