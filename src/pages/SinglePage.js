import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import "./SinglePage.css";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import Error from "./Error";

const SinglePage = () => {
  const tourName = useParams().name;
  const [currentProvince, setCurrentProvince] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [localLoading, setLocalLoading] = useState(true);

  //Just to scroll back to the top and loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const province = data.find((province) => province.name === tourName);
    if (province) {
      setCurrentProvince(province);
    }
    setLocalLoading(false);
  }, [tourName]);

  if (localLoading) {
    return <Loading />;
  }

  if (!currentProvince) {
    return <Error />;
  }

  const {
    name,
    img,
    desc,
    climate,
    food,
    localMusic,
    mainAttractions,
    phrase,
  } = currentProvince;

  return (
    <section className="province-section">
      {showModal && <Modal setShowModal={setShowModal} />}
      <div
        style={{
          background: `linear-gradient(rgba(60, 62, 62, 0.400), rgba(0, 0, 0, 0.793)), url(${img}) center/cover no-repeat`,
        }}
        className="img-left"
      >
        <div className="text-img">
          <h1 className="single-name">{name}</h1>
          <button onClick={() => setShowModal(true)} className="reserve">
            Reserve Tour!
          </button>
          <p className="single-phrase">"{phrase}"</p>
        </div>
      </div>
      <div className="province-data-container">
        <p className="province-p">{desc}</p>
        <p className="province-data">Climate: {climate}</p>
        <p className="province-data">Local cuisine: {food}</p>
        <p className="province-data">Local music: {localMusic}</p>
        <p className="province-data">Main attractions: {mainAttractions}</p>
      </div>
    </section>
  );
};

export default SinglePage;
