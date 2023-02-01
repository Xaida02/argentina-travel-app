import React, { useEffect, useState } from "react";
import { MdReviews } from "react-icons/md";
import Loading from "../components/Loading";
import "./About.css";

const About = () => {
  const [localLoading, setLocalLoading] = useState(true);

  //Just to scroll back to the top and loading
  useEffect(() => {
    window.scrollTo(0, 0);
    setLocalLoading(false);
  }, []);

  if (localLoading) {
    return <Loading />;
  }

  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about">
          About <span>us</span>
        </h1>
      </div>
      <div className="paragraph-container">
        <p className="long-text">
          Welcome to visitAR, your ultimate guide to experiencing the beauty and
          culture of Argentina. At visitAR, we believe in providing our
          customers with a truly immersive and authentic travel experience.
          <br /> We specialize in tours of the most captivating provinces in
          Argentina, including Buenos Aires, Formosa, Córdoba, Misiones, Tierra
          del fuego, Salta, and Mendoza. Our experienced and knowledgeable tour
          guides will lead you on a journey through the rich history and vibrant
          culture of Argentina, showcasing the best each province has to offer.
          <br />
          From the bustling streets of Buenos Aires to the natural wonders of
          Misiones and the stunning vineyards of Mendoza, we offer something for
          every type of traveler. But at visitAR, we know that true travel is
          about more than just sightseeing. It's about connecting with the local
          people and culture, and we strive to give our customers an{" "}
          <strong>authentic</strong> and <strong>memorable</strong> experience
          that goes beyond the typical tourist itinerary.
          <br /> We are <strong>passionate</strong> about Argentina and we want
          to share this passion with you. Trust us to show you the hidden gems
          and local secrets that make this country so special. Join us on a tour
          with visitAR and discover the mystical beauty of Argentina.
        </p>
      </div>
      <h2 className="reviews-heading">
        Here are some of our user{" "}
        <span>
          reviews <MdReviews className="review-icon" />
        </span>
        :
      </h2>
      <div className="reviews">
        <p className="review">
          "I recently took a tour of Buenos Aires with VisitAR and it was an
          unforgettable experience! The guides were incredibly knowledgeable and
          made the city come to life.
          <br /> I loved learning about the history and culture of Buenos Aires,
          and the tour included stops at some of the most iconic landmarks in
          the city. I would highly recommend VisitAR to anyone looking for a
          unique and immersive tour experience."
        </p>
        <p className="review">
          "I went on a tour of Formosa with VisitAR and it was truly amazing! I
          never expected to see such beautiful landscapes and wildlife in
          Argentina.
          <br /> The guides were very friendly and took great care of us
          throughout the tour. I felt like I was born here in the desert. I
          would definitely recommend VisitAR to anyone looking for an adventure
          in Argentina"
        </p>
        <p className="review">
          "I recently took a tour of Cordoba with VisitAR and it was an amazing
          experience! The guides were very passionate about the history of the
          city. I loved learning about the architecture and the culture of
          Cordoba, and the tour included stops at some of the most iconic
          landmarks in the city.
          <br /> I would highly recommend VisitAR to anyone looking for a unique
          and immersive tour experience."
        </p>
        <p className="review">
          "I was very nervous about traveling to Argentina due to the recent
          reports of insecurity, but the team at VisitAR made me feel reassured
          and safe throughout my entire tour. They provided clear and detailed
          safety instructions, and I felt secure in their hands.
          <br /> After experiencing the country and its culture firsthand, I
          realized that the media often exaggerates the situation, and I had an
          amazing, worry-free trip."
        </p>
        <p className="review">
          "I went on a tour of Misiones with VisitAR and it was a wonderful
          experience. The guides were very friendly and confident moving us
          throughout the area. I loved learning about the history and culture of
          Misiones, and the tour included stops at some of the most beautiful
          places in the province.
          <br /> I would definitely recommend VisitAR to anyone looking for an
          unforgettable tour experience in Argentina."
        </p>
        <p className="review">
          "I recently took a tour of Ushuaia with VisitAR and it was a fantastic
          experience! The guides were very knowledgeable and passionate about
          the area.
          <br /> I loved learning about the history and culture of Ushuaia and
          the tour included stops at some of the most iconic landmarks in the
          city. I would highly recommend VisitAR to anyone looking for a unique
          and immersive tour experience."
        </p>
      </div>
    </section>
  );
};

export default About;
