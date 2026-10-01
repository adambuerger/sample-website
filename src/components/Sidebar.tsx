import React from "react";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div>
      <a href="/">
        <img
          className="logo"
          src="/favicon.ico"
          alt={"Lundy's Catering"}
        />
      </a>
      </div>
      <div><a href="/about">About</a></div>
      <div><a href="/contact">Contact</a></div>
    </div>
  );
};

export default Sidebar;
