import React from "react";
import UserData from "../components/UserData";
import Navbar from "../components/Navbar";

function Profile({ userData }) {
  const cntEvents = () => {
    return userData.accepted_events.length;
  };

  return (
    <>
      <UserData
        email={userData.email}
        picture={userData.picture}
        eventCnt={cntEvents}
      />
      <Navbar />
    </>
  );
}

export default Profile;
