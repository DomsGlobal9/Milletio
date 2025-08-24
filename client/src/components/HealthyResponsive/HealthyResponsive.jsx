import React from "react";
import { useMediaQuery } from "react-responsive";
import Healthy from "../Healthy/Healthy"; // Your existing Healthy component
import "./HealthyResponsive.css";
import Healthy_crop1 from "../../assets/Healthy_crop_img.jpg";
import Healthy_crop2 from "../../assets/Healthy_crop_img2.jpg";
import Healthy_crop3 from "../../assets/Healthy_crop_img3.jpg"
import promoVideo from "../../assets/milletio_crops_video.mp4"
const DesktopHealthy = () => (
   <div className="healthy-container">
      <div className="healthy-copy">
        <h2>Welcome to Milletio</h2>
        <p>
          Wholesome food. Powered by ancient grains. <br />
        At Milletio, we make clean, everyday foods using one powerful ingredient—millets. They’re rich in nutrients, light on your gut, and kind to the planet
        </p>
        <p>
          Our products are simple, honest, and made without refined sugar,
          preservatives, or anything fake. Just real ingredients that help you
          feel good, every day.
        </p>
        <p>
          From snacks to staples, we blend tradition with modern convenience, so
          healthy eating never feels like a compromise.
        </p>
        <h3>Go natural. Eat millet. Live better—with Milletio.</h3>
      </div>

      {/* <div className="healthy-video">
        <video src={promoVideo} autoPlay loop muted playsInline />
      </div> */}
      <div class="parent">
        <div class="div1"> <img src={Healthy_crop1} alt="Healthy1" width={242}/></div>
        <div class="div2"> <img src={Healthy_crop2} alt="Healthy2" width={242} /> </div>
        <div class="div3"> <img src={Healthy_crop3} alt="Healthy3" width={230} /> </div>
      </div>
    </div>
);

const ResponsiveHealthy = () => {
  // Define breakpoint for mobile devices (max-width: 768px)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return isMobile ? <Healthy /> : <DesktopHealthy />;
};

export default ResponsiveHealthy;
