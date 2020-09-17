import React from "react";
import HomeHeader from "../components/HomeHeader";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";

function Home() {
  return (
    <>
      <HomeHeader />
      <Announcements />
      <Navbar />
    </>
  );
}

export default Home;
