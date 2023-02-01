import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignJustify, FaMountain } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
          <h1 className="logo-heading">
            <FaMountain className="logo-icon" /> VisitAR
          </h1>
        </div>
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <button
            onClick={() => setShowLinks(!showLinks)}
            style={{
              transform: showLinks ? "rotate(90deg)" : "rotate(0deg)",
              background: showLinks ? "#43a1d5" : "",
            }}
            className="toggle-btn"
          >
            <FaAlignJustify className="toggle" />
          </button>
        </div>
        <div
          style={{ height: `${data.length * 40}px` }}
          className={"show-links" + (showLinks ? " show" : "")}
        >
          {data.map((province) => (
            <Link
              key={province.population}
              to={`/tour/${province.name}`}
              onClick={() => setShowLinks(false)}
            >
              {province.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
