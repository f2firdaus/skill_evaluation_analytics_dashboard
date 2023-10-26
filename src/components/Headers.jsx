import React from "react";
import logo from "../../src/assets/logo.svg";
import profile from "../assets/profile.png";
const Headers = () => {
  return (
    <>
      <header className="header">
        <img className="logo_img" src={logo} alt="" />

        <button className="profile-btn">
          <img className="profile" src={profile} alt="" width={25} />
          <span>Siddharth Jain</span>
        </button>
      </header>
    </>
  );
};

export default Headers;
