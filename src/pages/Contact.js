import React, { useEffect, useState } from "react";
import { social } from "./socials";
import Loading from "../components/Loading";
import emailjs from "emailjs-com";
import { FaCheck, FaTimes } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const [localLoading, setLocalLoading] = useState(true);

  const [showSent, setShowSent] = useState({ color: null, sent: false });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSent({ color: null, sent: false });
    }, 3500);
    // timeout();
    return () => clearTimeout(timeout);
  }, [showSent]);

  //Just to scroll back to the top and loading
  useEffect(() => {
    window.scrollTo(0, 0);
    setLocalLoading(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const publicKey = "0xsDJAcTBLI7IHp3B";

    const inputs = e.target.elements;

    console.log(inputs);

    if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
      setShowSent({ sent: true, color: false });
    } else {
      emailjs
        .sendForm("service_1boh3vt", "template_v9x1vfc", e.target, publicKey)
        .then((res) => {
          console.log(res);
          setShowSent({ sent: true, color: true });
        })
        .catch((err) => console.log(err));
    }
  };

  if (localLoading) {
    return <Loading />;
  }

  return (
    <section className="contact-section">
      <div className="contact-headings">
        <h1 className="tobias">Xaida02</h1>
        <p className="email">tejada.v.tobias@gmail.com</p>
      </div>
      <div className="text-container">
        <p className="text-contact">
          As a highly motivated and eager junior front end developer, I am
          currently honing my skills and building my portfolio to showcase my
          abilities and expertise. If you're looking for a dedicated and
          passionate developer to join your team, I would love the opportunity
          to connect with you and discuss how my skills can benefit your
          organization. Feel free to reach out to me on the following platforms.
          I am always available and ready to take on new challenges.
        </p>
      </div>
      <div className="conctact-email-container">
        <h2>Send an email</h2>
        <form onSubmit={sendEmail}>
          <label>Name:</label>
          <input className="e-input" type="text" name="name" />
          <label>Email:</label>
          <input className="e-input" type="email" name="user_email" />
          <label>Write a message:</label>
          <textarea className="e-input" type="Message" rows="4" />
          <input className="e-input submit-btn" type="submit" />
        </form>
      </div>
      <div className="socials">
        {social.map((profile) => (
          <a
            rel="noreferrer"
            target="_blank"
            href={profile.url}
            key={profile.id}
          >
            {profile.icon}
          </a>
        ))}
      </div>
      <div
        className={
          "email-sent" +
          `${showSent.sent ? " show-sent " + showSent.color : ""}`
        }
      >
        {showSent.color && (
          <>
            <FaCheck /> Email sent
          </>
        )}
        {!showSent.color && (
          <>
            <FaTimes /> Sent failed
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
