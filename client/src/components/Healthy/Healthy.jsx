import React, { useEffect } from "react";
import "./Healthy.css";
import { useMediaQuery } from "react-responsive";
/* ------- image assets (adjust the relative paths if yours differ) ------- */
import barPack   from "../../assets/Choco Berry01 1.svg";    // main product
import barStackL from "../../assets/militio_delight-removebg-preview 1.svg";      // decorative stacks (optional)
import barStackR from "../../assets/militio_delight-removebg-preview 2.svg";
import arrowImg  from  "../../assets/new_arrow.svg";   // MUST point right by default
import AOS from "aos";
import milletio from "../../assets/Logo 2.svg"

const Healthy=()=> {
     useEffect(() => {
    AOS.init({
      duration: 800,  // animation length in ms
      once: true,     // animate only the first time you scroll into view
      offset: 120,    // start a little before the section fully enters
    });
  }, []);
  return (
    <section className="healthy">

      {/* ─── 1. Headline with bar stacks ─────────────────────────────── */}
      <header className="headline">
        <img src={barStackL}  data-aos="fade-right"
          data-aos-delay="100"  className="stack stack--left"  alt="" />
        <h2>
          Healthy never<br />
          tasted this good.<br />
          That’s <span className="logo"><img src={milletio} alt="milletio" width={120} /></span>
        </h2>
        <img src={barStackR}   data-aos="fade-left"
          data-aos-delay="100" className="stack stack--right" alt="" />
      </header>

      {/* ─── 2. Product & benefit call‑outs ──────────────────────────── */}
      <div className="productBox">

        <img src={barPack} className="pack" alt="Milletio Choco Berry Crunch bar" />

        {/* Every call‑out has the arrow + the text */}
        <div className="callout protein" data-aos="zoom-in">
          <img src={arrowImg} className="arrow" alt="" />
          <span data-aos="zoom-in"  data-aos-delay="1000" >Protein&nbsp;<br />Rich</span>
        </div>

        <div className="callout gluten" data-aos="zoom-in">
          <img src={arrowImg} className="arrow" alt="" />
          <span data-aos="zoom-in" data-aos-delay="1000" >Gluten&nbsp;<br />free</span>
        </div>

        <div className="callout gut" data-aos="zoom-in">
          <img src={arrowImg} className="arrow" alt="" />
          <span data-aos="zoom-in" data-aos-delay="1000" >Gut&nbsp;<br />friendly</span>
        </div>

        <div className="callout antiox" data-aos="zoom-in">
          <img src={arrowImg} className="arrow" alt="" />
          <span data-aos="zoom-in" data-aos-delay="1000" >Antioxigen&nbsp;<br />Rich</span>
        </div>

        <div className="callout fiber" data-aos="zoom-in">
          <img src={arrowImg} className="arrow" alt="" />
          <span data-aos="zoom-in" data-aos-delay="1000" >Fiber&nbsp;<br />Rich</span>
        </div>

        <div className="callout preserv" data-aos="zoom-in">
          <img src={arrowImg} className="arrow" alt="" />
          <span data-aos="zoom-in" data-aos-delay="1000" >Preservation&nbsp;<br />free</span>
        </div>

        <div className="callout sweet" data-aos="zoom-in">
          <img src={arrowImg} className="arrow" alt="" />
          <span data-aos="zoom-in" data-aos-delay="1000" >Natural&nbsp;<br />Sweetness</span>
        </div>
      </div>
    </section>
  );
}

export default Healthy;