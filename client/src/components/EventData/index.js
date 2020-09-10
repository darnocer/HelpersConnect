import React from "react";
import axios from "axios";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";
<<<<<<< HEAD
function EventData({ start, end, title, description, location, id, user, handleClick }) {
  function confirmEvent(e) {
    console.log(e.target.id);
}
=======

function EventData({
  start,
  end,
  title,
  description,
  location,
  id,
  handleBtnClick,
}) {
  function confirmEvent(e) {
    console.log(e.target.id);

    // console.log("confirming event", id);

    //post to server with event and user id. user id might be on server in cookie
  }

>>>>>>> 05c4158c9622fdbd4352d5f82cb60e17c319198c
  return (
    <div className="row">
      <Date start={start} end={end} />
      <EventDetails
        title={title}
        start={start}
        end={end}
        description={description}
        location={location}
        id={id}
        user={user}
      />
      <ResponseBtns
      //give ResponseBtns controller the following stuff.  Passing prop
      id={id}
      handleClick={handleClick}
      />
<<<<<<< HEAD
=======
      <ResponseBtns
        id={id}
        doConfirm={confirmEvent}
        handleBtnClick={handleBtnClick}
      />
>>>>>>> 05c4158c9622fdbd4352d5f82cb60e17c319198c
    </div>
  );
}
export default EventData;
