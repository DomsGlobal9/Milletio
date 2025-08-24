import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Benefits.css";

import easyPng from "../../assets/New_pan - Copy.svg";
import preservativePng from "../../assets/leaf.svg";
import glutenPng from "../../assets/double_left - Copy.svg";
import healthPng from "../../assets/Health_focus.svg";
import localPng from "../../assets/Local_source.svg";
import ancientPng from "../../assets/Ancient_food.svg";

const benefits = [
  { src: easyPng,         alt: "Easy to Make",      title: "Easy to Make" },
  { src: preservativePng, alt: "No Preservatives",  title: "No Preservatives" },
  { src: glutenPng,       alt: "Gluten Free",       title: "Gluten Free" },
  { src: healthPng,       alt: "Health Focused",    title: "Health Focused" },
  { src: localPng,        alt: "Local Sourcing",    title: "Local Sourcing" },
  { src: ancientPng,      alt: "Ancient Superfood", title: "Ancient Superfood" },
];

const isDesktop = () => window.innerWidth >= 900;

const WhyMilletio = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="why">
      <h2 className="why__heading">Why milletio&nbsp;?</h2>
      <div className="why__grid">
        {benefits.map((b, i) => (
          <article
            key={b.title}
            className="card"
            data-aos={
              isDesktop()
                ? i < 3
                  ? "fade-right"
                  : "fade-left"
                : undefined
            }
            data-aos-delay={isDesktop() ? 100 * (i % 3) : undefined}
          >
            <div>
              <img className="card__icon" src={b.src} alt={b.alt} loading="lazy" />
            </div>
            <div>
              <h3 className="card__title">{b.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyMilletio;

