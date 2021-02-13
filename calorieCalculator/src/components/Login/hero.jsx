import React, { useState, useEffect } from "react";
import Setting from "./Setting";
import firebase from "../../firebase";

const Hero = ({ handleLogout, email }) => {
  const [profile, setProfile] = useState(false);
  const [profileName, setProfileName] = useState("");

  const toggleSetting = () => {
    if (profile === true) {
      return <Setting />;
    }
  };

  const handleSetting = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    const profileRef = firebase.database().ref("Profile");
    profileRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(email);
      const list = Object.keys(data).filter((x) => data[x].address === email);
      console.log(list);
      setProfileName(data[list].name);
    });
  }, []);

  return (
    <>
      <div className="hero">
        <h2 className="title">WELCOME {profileName}!</h2>
        <button className="setting" onClick={handleSetting}>
          Set your profile
        </button>
        <button className="log-out" onClick={handleLogout}>
          Log out
        </button>
        <div>{toggleSetting()}</div>
      </div>
    </>
  );
};

export default Hero;
