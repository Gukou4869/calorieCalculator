import React from "react";

const Hero = ({ handleLogout }) => {
  return (
    <>
      <div className="hero">
        <h2 className="title">WELCOME !</h2>
        <button className="setting">Set your profile</button>
        <button className="log-out" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Hero;
