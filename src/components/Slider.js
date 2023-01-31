import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = ({
  provinceIndex,
  population,
  img,
  name,
  phrase,
  index,
  provinces,
  setIndex,
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  let position = "nextSlide";
  if (provinceIndex === index) {
    position = "activeSlide";
  }
  if (
    provinceIndex === index - 1 ||
    (index === 0 && provinceIndex === provinces.length - 1)
  ) {
    position = "lastSlide";
  }

  // Handle the slide for mobile devices

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setIndex(index + 1);
    }
    if (isRightSwipe) {
      setIndex(index - 1);
    }
  };

  return (
    <article
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={position + " slider"}
      key={population}
    >
      <h2 className="provinces-heading">{name}</h2>
      <div className="img-container">
        <Link to={`/tour/${name}`} className="tour">
          <h2>Preview</h2>
        </Link>
        <img className="province-img" src={img} alt={`${name} pic`} />
      </div>
      <div className="slider-footer">
        <p className="text">
          {phrase} <FaQuoteRight className="quote-icon" />
        </p>
      </div>
    </article>
  );
};

export default Slider;
