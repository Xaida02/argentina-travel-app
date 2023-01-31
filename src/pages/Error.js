import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page">
      404 page not found
      <Link className="glow-on-hover" to="/">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
