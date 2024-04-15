import React from "react";
import "./fullscreen.css";

export const Fullscreen = ({ fullscreenURL, setFullscreenIsActive }) => {
  return (
    <div className="fullscreen" onClick={() => setFullscreenIsActive(false)}>
      <img src={fullscreenURL} alt="" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};
