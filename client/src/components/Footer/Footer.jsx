import React from "react";
import "./Footer.css";

/*  social icons via react‑icons (1 kB treeshaken) */
// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/Instagram.svg"
import Linkedin from "../../assets/LinkedIn.svg"
import logo from "../../assets/milliteo_white_logo_footer.svg";          
import footerBg from "../../assets/final_footer_bg.jpg";
import Phone_icon from "../../assets/phone_icon.svg";
import Mail_icon from "../../assets/email_icon.svg";
import Location_icon from "../../assets/location_icon.svg"
import desktop_footer_bg from "../../assets/milletio_final_footer_bg.jpg"
const Footer = () => (
  
  <footer
    className="foot"
     >
     {/* --- logo --- */}
     {/* <div className="footer"> */}
     <div className="mobile_view " 
     style={{
      backgroundImage: `url(${footerBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }} >
     <div className="footer_head">
    <img className="footer__logo" src={logo} alt="Milletio – The Global Grain" />          
     </div>

    <div className="footer__links">
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about">About&nbsp;Us</a></li>
          <li><a href="/privacy">Privacy&nbsp;Policy</a></li>
          <li><a href="/terms">Terms&nbsp;&amp;&nbsp;Conditions</a></li>
        </ul>
      </div>

      <div>
        <h3>Find Us</h3>
        <ul>
          <li><a href="#amazon"   target="_blank" rel="noreferrer">Amazon</a></li>
          <li><a href="#flipkart" target="_blank" rel="noreferrer">Flipkart</a></li>
          <li><a href="#swiggy"   target="_blank" rel="noreferrer">Swiggy&nbsp;Instamart</a></li>
          <li><a href="#blinkit"  target="_blank" rel="noreferrer">Blink&nbsp;it</a></li>
        </ul>
      </div>
    </div>

   

    {/* --- contact details --- */}
    <address className="footer__address">
      Address: PT No 12, Flat No 102, RV Heights, Matha Bhuvaneshwari Colony, Khanamet, Allapur<br />
      Kothaguda, 500084
    </address>

    <p className="footer__call">Call Us: <a href="tel:+919052094646" className="tel_no">+91 9052094646</a></p>

    <p className="footer__email">Email: <a href="mailto:info@milletioglobalgrain.com" className="email_info">info@milletioglobalgrain.com</a></p>
{/* <hr  className="footer_hr" /> */}
    <div className="footer__social">
      <a aria-label="Instagram" href="#ig"><img src={Instagram} alt="Facebook" /></a>
      <a aria-label="Facebook"  href="#fb"><img src={Facebook} alt="Facebook" /></a>
      <a aria-label="LinkedIn"  href="#link"><img src={Linkedin} alt="Facebook" /></a>
    </div>
    </div>
    {/* </div> */}

    {/* //laptop-view */}
    <div className="footer-desktop">
     <div className="footer-desktop__container">
      {/* Logo & Contact */}
      <div className="footer-desktop__col">
        <img src={logo} alt="Milletio Logo" className="footer-desktop__logo" />
        <div className="footer-desktop__contact">
          <div><img src={Location_icon} alt="" /> Hyderabad</div>
          <div><img src={Phone_icon} alt="" /> +91 9052094646</div>
          <div><img src={Mail_icon} alt="" /> info@milletioglobalgrain.com</div>
        </div>
      </div>
      {/* Shop */}
      <div className="footer-desktop__col">
        <div className="footer-desktop__heading">Shop</div>
        <ul>
          <li>Bestsellers</li>
          <li>New Launches</li>
          <li>Dosa Mix</li>
          <li>Pancake mix</li>
          <li>Nutri Bar</li>
          <li>All</li>
          <li>Combos</li>
        </ul>
      </div>
      {/* Our Company */}
      <div className="footer-desktop__col">
        <div className="footer-desktop__heading">Our Company</div>
        <ul>
          <li>Story</li>
          <li>Careers</li>
          <li>Exports</li>
          <li>Contact Us</li>
          <li>Download Brochure</li>
          <li>Become a Distributor</li>
          <li>Decode Millet Campaign</li>
        </ul>
      </div>
      {/* Policies */}
      <div className="footer-desktop__col">
        <div className="footer-desktop__heading">Policies</div>
        <ul>
          <li>Privacy Policy</li>
          <li>Shipping & Delivery</li>
          <li>Returns & Refund</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      {/* Social */}
      <div className="footer-desktop__col footer-desktop__social">
        <div className="footer-desktop__heading footer-desktop__follow">Follow Us On</div>
        <div className="footer-desktop__icons">
          <a href="#"><img src={Instagram} alt="Instagram" /></a>
          <a href="#"><img src={Facebook} alt="Facebook" /></a>
          <a href="#"><img src={Linkedin} alt="LinkedIn" /></a>
        </div>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
