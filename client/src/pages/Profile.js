import React, { useState, useEffect } from "react";
import UserData from "../components/UserData";
import API from "../utils/API";

function Profile() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser();
    console.log(userData);
  }, []);

  const getUser = () => {
    console.log("userrrrrrr");
    let path = window.location.pathname.replace(/\/+$/, "");
    path = path[0] === "/" ? path.substr(1) : path;
    API.getUser({ userId: path }).then((res) => setUserData(res.data));
  };

  return (
    <UserData
      data={userData}
      // eventCnt={userData.accepted_events.length}
    />
  );
}

export default Profile;
