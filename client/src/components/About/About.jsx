import React from "react";
import "./About.css";

/* swap these for your real assets */
import founderImg from "../../assets/founder_pic.jpg";    // 240 × 320 portrait
import wheatIcon  from "../../assets/final_about_bottom_lefts.png";

export default function About() {
  return (
    <section className="about">
      {/* ── intro ───────────────────────────── */}
      <header className="about__header">About us</header>

      <p>
        At Milletio Global Grain, we are passionate about bringing the wholesome
        goodness of millets to your table. Grown and processed using
        eco‑friendly, time‑honoured techniques, our products embody the perfect
        balance of nutrition, taste and sustainability. We source high‑quality
        millets directly from trusted farmers, ensuring every grain meets our
        stringent standards. Whether you’re a fitness enthusiast, a busy parent
        or someone looking to lead a healthier lifestyle, our range makes health,
        heritage, and taste come together.
      </p>

      {/* ── founder ─────────────────────────── */}
      <figure className="about__founder">
        <img src={founderImg} alt="Tharunthi Kumarasri – Founder" />
        <figcaption>About the Founder</figcaption>
      </figure>

      <p>
        Tharunthi Kumarasri is the visionary force behind Milletio. Driven by a
        passion to revive India’s ancient grains, he embarked on a journey to
        make millets mainstream for modern diets. With a background in food
        science and sustainable agriculture, Tharunthi believes in the power of
        functional foods, especially for busy families seeking convenient yet
        nutritious choices. His commitment to quality and transparency guides
        every step—from farm relationships to the final product on your plate.
      </p>

      <p>
        Tharunthi’s ultimate goal? To put millets on every healthy household’s
        menu.
      </p>

      {/* ── decorative divider ──────────────── */}
      <div className="about__divider">
        <img src={wheatIcon} alt="wheat" lazy="loading" />
      </div>
    </section>
  );
}
