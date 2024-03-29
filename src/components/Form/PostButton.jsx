import React from "react";
import "./postbutton.css";
import { Link } from "react-router-dom";

export const PostButton = (props) => {
  return (
    <Link onClick={props.onSendData} className="postbutton">
      {props.text}
    </Link>
  );
};
