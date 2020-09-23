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
  attachments,
}) {
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    const eventsArr = userData.accepted_events;
    if (eventsArr.includes(eventId)) {
      setAccept(true);
    } else {
      setAccept(false);
    }
  }, []);

  const handleBtnClick = (e) => {
    if (accept) {
      setAccept(!accept);
    } else {
      API.addEvent({
        id: e.target.id,
      }).then(() => {
        userData.accepted_events.push(eventId);
        setAccept(!accept);
      });
    }
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
        attachments={attachments}
      />
      <ResponseBtns
        eventId={eventId}
        handleBtnClick={handleBtnClick}
        accepted={accept}
      />
    </div>
  );
}
export default EventData;
