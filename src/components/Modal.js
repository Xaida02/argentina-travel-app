import React from "react";
import "./Modal.css";
import { FaCreditCard, FaTimes } from "react-icons/fa";

const Modal = ({ setShowModal }) => {
  return (
    <div className="dark-background">
      <div className="modal">
        <h1 className="modal-heading">This tour includes</h1>
        <div className="product">
          <ul className="product-ul">
            <li className="product-li">
              Accommodations in a local hotel or resort
            </li>
            <li className="product-li">
              Transportation to and from the tour locations
            </li>
            <li className="product-li">
              Guided tours of historical and cultural sites
            </li>
            <li className="product-li">
              Meals, including traditional local cuisine
            </li>
            <li className="product-li">
              Outdoor activities such as hiking or wildlife watching
            </li>
            <li className="product-li">
              Entrance fees to any included attractions or landmarks
            </li>
            <li className="product-li">
              Shopping opportunities for local handicrafts or souvenirs
            </li>
            <li className="product-li">
              Local entertainment, such as live music or dance performances
            </li>
            <li className="product-li">
              Expert local guides to provide information and history about the
              areas visited
            </li>
            <li className="product-li">
              Optional excursions or activities for an additional cost.
            </li>
          </ul>
        </div>
        <button className="close-modal" onClick={() => setShowModal(false)}>
          <FaTimes className="close-icon" />
        </button>
        <button className="pay">
          Pay options <FaCreditCard />
        </button>
      </div>
    </div>
  );
};

export default Modal;
