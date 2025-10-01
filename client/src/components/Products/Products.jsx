import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import "./Products.css";
import ProductCard from "../Cards/ProductCard";
import { products as mock } from "../../assets/productsMock";
import SignInModal from "../Model/Model";
import { StateContext } from "../../context/DataShare";

const categories = ["Nutri Bar", "Dosa Mix", "Breakfast Mix", "Pancake Mix", "Spreads"];

const Products = () => {
  const [activeCat, setActiveCat] = useState("Nutri Bar");
  const [data, setData] = useState([]);
  const { open, setOpen } = useContext(StateContext);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setData(mock);
  }, []);

  const filtered = data.filter(p => p.category === activeCat);

  const scroll = (direction) => {
    const container = document.getElementById("pList");
    const scrollAmount = 300;
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="products">
      <h2 className="products__heading">Our Products</h2>
      <h2 className="products_desktop_heading">Premium Millet Products</h2>
      
      <nav className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab ${cat === activeCat ? "is-active" : ""}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <button className="arrow left" onClick={() => scroll("left")}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M15 6l-6 6 6 6" stroke="#493003" strokeWidth="2" fill="none" />
        </svg>
      </button>
      
      <div className="pList">
        {filtered.map(item => (
          <ProductCard key={item.id} {...item}/>
        ))}
      </div>
      
      <button className="arrow right" onClick={() => scroll("right")}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M9 6l6 6-6 6" stroke="#493003" strokeWidth="2" fill="none" />
        </svg>
      </button>

      {/* ✅ Add modal ONCE here */}
      <SignInModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Products;