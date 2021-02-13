import React, { useState } from "react";
import Setting from "./Setting";

const Hero = ({ handleLogout, nickName }) => {
  const [profile, setProfile] = useState(false);

  const toggleSetting = () => {
    if (profile === true) {
      return <Setting />;
    }
  };

  const handleSetting = () => {
    setProfile(!profile);
  };

  return (
    <>
      <section className="hero">
        <p className="log-in"></p>
        <h2 className="title">WELCOME {nickName}!</h2>
        <button onClick={handleSetting}>Set your profile</button>
        <button onClick={handleLogout}>Log out</button>
        {toggleSetting()}
      </section>
    </>
  );
};

export default Hero;
