import React from "react";
import "./postbutton.css";

export const PostButton = (props) => {
  return (
    <div onClick={props.onSendData} className="postbutton">
      {props.text}
    </div>
  );
};
