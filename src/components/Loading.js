import React from "react";
import { CircleLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="central-cee">
      <CircleLoader className="load-icon" size={100} color="#3c91c0" />
    </div>
  );
};

export default Loading;
