import React from "react";
import UserData from "../components/UserData";

function Profile({ userData }) {
  const cntEvents = () => {
    return userData.accepted_events.length;
  };

  return (
    <UserData
      email={userData.email}
      picture={userData.picture}
      eventCnt={cntEvents}
    />
  );
}

export default Profile;
