import { useEffect, useState } from "react";
import "./navbar.css";
import hamburgerIcon from "../../assets/hamburg_icon.svg";
import milletioLogo  from "../../assets/milletio_logo.png";
import cartIcon      from "../../assets/cart_img.svg";
import heartIcon     from "../../assets/Heart_icon.svg";
import insta_icon from "../../assets/Instagram_sidebar_icon.svg";
import facebook_icon from "../../assets/Facebook_sidebar_icon.svg";
import Linkedin_icon from "../../assets/LinkedIn_sidebar_icon.svg";
import menu_sidebar_img from "../../assets/menu_sidebar_img.svg"
import { Link } from "react-router-dom";
import AOS from 'aos';
import profileIcon from "../../assets/profile_Icon.svg"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // One source of truth 🔽
  const navLinks = [
    { label: "Shop",       href: "/shop" },
    { label: "My Orders",  href: "/orders" },
    { label: "Our Story",  href: "/story" },
    { label: "Community",  href: "/community" },
    { label: "Profile",    href: "/profile" },
  ];


    const desktopNavLinks = [
    { label: "Products", href: "/shop" },
    { label: "Our Community", href: "/community" },
    { label: "Our Story", href: "/story" },
  ];
  return (
    <>
       <div>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="scrolling_bar"
        >
          <h3>🛍️ Get Free Shipping on Your Order ₹499 or Above 🎉🚚</h3>
        </marquee>
      </div>

      <nav className="navbar">
        {/* ⇢ hamburger (hidden ≥ lg) */}
        <button
          className="navbar__icon-btn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="sidebar"
          onClick={() => setOpen(true)}
        >
          <img src={hamburgerIcon} alt="menu" />
        </button>

        {/* logo */}
        <div className="navbar__logo">
          <Link to="/"><img src={milletioLogo} alt="Milletio logo" /></Link>
        </div>      
        <ul className="navbar__links">
          {desktopNavLinks
            .filter(l => l.label !== "Profile") // Remove Profile from inline links
            .map((l) => (
              <li key={l.label}>
                <Link to={l.href}>{l.label}</Link>
              </li>
            ))}
        </ul>
        {/* cart / wishlist */}
        <div className="cart_and_heart">
            <Link to="/profile"><img src={profileIcon} alt="Profile" className="profile-icon" /></Link>
          <Link to="/wishlist"><img src={heartIcon} alt="Wishlist" /></Link>
          <Link to="/cart"><img src={cartIcon}  alt="Cart" /></Link>
        </div>
      </nav>

      {/* overlay */}
      <div
        className={`sidebar__overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      {/* sidebar (visible < lg) */}
      <aside
        id="sidebar"
        className={`sidebar ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <button
          className="sidebar__close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>

        {/* nav links inside sidebar */}
    <div className="sidebar_container">
      <div>
        <ul className="sidebar__links">
          {navLinks.map((l) => (
            <li key={l.label} onClick={() => setOpen(false)}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul> 
        </div>
        <div className="menu_sidebar_img" >
          <img src={menu_sidebar_img} alt="menu_sidebar_img" width={110} />
        </div>   
        </div>
           <br />
          <hr className="sidebar_hr_line" />

        <div className="sidebar_second_head">
          <h4 className="sidebar_icon_head">Follow us on</h4>
          <div className="sidebar_social_media_icons">
             <div><img src={insta_icon} alt="instagram" /></div>
             <div><img src={facebook_icon} alt="facebook" /></div>
             <div><img src={Linkedin_icon} alt="linkedin" /></div>
          </div>
        </div>
      </aside>
    </>
  );
}
