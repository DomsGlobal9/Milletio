import React from "react";
import "./FollowUs.css";

import followBanner from "../../assets/Media.jpg";
import followUsDesktop from "../../assets/followUs_frame.jpg";
import followFrame from "../../assets/milletio_reels_frame.jpg"
const FollowUs = () => (
  <section className="followUs">
    {/* Mobile text */}
    <div className="followUs__mobileText">
      <h3 className="followUs__title">Follow Us On</h3>
      <p className="followUs__handle">@milletio_globalgrain</p>
    </div>
    {/* Desktop/Laptop text */}
    <div className="followUs__desktopText">
      <h3 className="followUs__title">Let's have a bite with milletio every day.</h3>
    </div>

    <a
      className="followUs__banner"
      href="https://www.instagram.com/milletio_globalgrain/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={followBanner} alt="Latest posts from milletio_globalgrain" />
    </a>

    {/* Show only on laptop/desktop */}
    <div className="followUs__desktopFrame">
      <img src={followUsDesktop} alt="Follow Us Frame" />
    </div>
  </section>
);

export default FollowUs;
