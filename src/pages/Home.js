import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import data from "../data";
import {
  FaAngleLeft,
  FaAngleRight,
  FaTwitter,
  FaRegEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { social } from "./socials";

// css
import "./Home.css";

const Home = () => {
  const [provinces, setProvinces] = useState(data);
  const [localLoading, setLocalLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const isMobileDevice = () => {
    // checks if the user is on his phone
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  //Just to scroll back to the top and loading
  useEffect(() => {
    window.scrollTo(0, 0);
    setLocalLoading(false);
  }, []);

  useEffect(() => {
    const lastIndex = provinces.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

    // slide tours using the keyboard

    const handleKeySlide = (e) => {
      if (e.key === "ArrowLeft") {
        // console.log(" <===== ");
        setIndex(index - 1);
      } else if (e.key === "ArrowRight") {
        // console.log(" =====> ");
        setIndex(index + 1);
      }
    };

    window.addEventListener("keydown", handleKeySlide);
    return () => window.removeEventListener("keydown", handleKeySlide);
  }, [index, provinces]);

  useEffect(() => {
    let autoSliding = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(autoSliding);
  }, [index]);

  if (localLoading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="title">
        <h1 className="name">
          Argen
          <br />
          tina
        </h1>
        <h2>"From the Pampas to the Andes, one people"</h2>
        <br />
      </div>
      <section id="hi" className="provinces-section">
        <div className="slider-container">
          {!isMobileDevice() &&
            window.innerHeight > 300 &&
            window.innerWidth >= 500 && (
              <button
                onClick={() => setIndex(index - 1)}
                className="arrow-btn prev"
              >
                <FaAngleLeft className="slide-icon" />
              </button>
            )}
          {provinces.map((province, provinceIndex) => {
            return (
              <Slider
                {...province}
                setIndex={setIndex}
                key={province.area}
                provinceIndex={provinceIndex}
                provinces={provinces}
                index={index}
              />
            );
          })}
          {!isMobileDevice() &&
            window.innerHeight > 300 &&
            window.innerWidth >= 500 && (
              <button
                onClick={() => setIndex(index + 1)}
                className="arrow-btn next"
              >
                <FaAngleRight className="slide-icon" />
              </button>
            )}
        </div>
      </section>
      <footer className="foot">
        <div className="copyright">
          All rights reserved by visitAR, Copyright © {new Date().getFullYear()}
        </div>
        <div className="social-sites">
          <a className="icon-link" href="#hi">
            <FaTwitter className="foot-icon" />
          </a>
          <a className="icon-link" href="#hi">
            <FaRegEnvelope className="foot-icon" />
          </a>
          <a className="icon-link" href="#hi">
            <FaFacebook className="foot-icon" />
          </a>
          <a className="icon-link" href="#hi">
            <FaInstagram className="foot-icon" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
