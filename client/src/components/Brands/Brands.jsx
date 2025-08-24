import React from "react";
import "./Brands.css";
import img1 from "../../assets/amazon.svg";
import img2 from "../../assets/swiggy.svg";
import img3 from "../../assets/blinkit.svg";
import img4 from "../../assets/flipcart.svg";


const Brands = () => (
  <section className="brands">
    <div className="brands__heading">
      <div><h1 className="brand_title">Milletio </h1></div>
      <div><h3 className="sub_brand_title">Now at Your Doorstep</h3></div>
    </div>
    {/* ——— marquee strip ——— */}
    <div className="marquee">
      <div className="marquee__track">
        {/* duplicate the 3 images twice for a seamless loop */}
        {[img1, img3, img2,img4, img1, img3, img2,img4,img1, img3, img2,img4,img1, img3, img2,img4].map((src, i) => (
          <img key={i} src={src} alt={`Brand ${i % 3}`} />
        ))}
      </div>
    </div>
  </section>
);

export default Brands;
