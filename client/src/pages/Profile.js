import React, { useState, useEffect } from "react";
import UserData from "../components/UserData";
import API from "../utils/API";

function Profile() {
  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   //call getEvents function to pull calendar data
  //   getUser();
  // });

  // const getUser = () => {
  //   console.log("userrrrrrr");
  //   let path = window.location.pathname.replace(/\/+$/, "");
  //   path = path[0] === "/" ? path.substr(1) : path;
  //   API.getUser({ userId: path })
  //     .then((res) => setUserData(res.data))
  //     .then(console.log(userData));
  // };

  return (
    <UserData
    // email={userData.email}
    // picture={userData.picture}
    // eventCnt={userData.accepted_events.length}
    />
  );
}

export default Profile;
