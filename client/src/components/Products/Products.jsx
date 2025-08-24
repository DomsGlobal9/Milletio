// import React, { useState, useEffect } from "react";
// import "./Products.css";
// import ProductCard from "../Cards/ProductCard";
// import { products as mock } from "../../assets/productsMock";

// const categories = ["Nutri Bar", "Dosa Mix", "Breakfast Mix", "Pancake Mix"];

// const Products = () => {
//   const [activeCat, setActiveCat] = useState("Nutri Bar");
//   const [data, setData] = useState([]);

//   /* simulate fetch */
//   useEffect(() => {
//     // Replace with axios.get("/api/products") in future
//     setData(mock);
//   }, []);

//   const filtered = data.filter(p => p.category === activeCat);

//   return (
//     <section className="products">
//       <h2 className="products__heading">Our Products</h2>

//       {/* ----- Category Tabs ----- */}
//       <nav className="tabs">
//         {categories.map(cat => (
//           <button
//             key={cat}
//             className={`tab ${cat === activeCat ? "is-active" : ""}`}
//             onClick={() => setActiveCat(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </nav>

//       {/* ----- Product Cards ----- */}
//       <div className="pList">
//         {filtered.map(item => (
//           <ProductCard key={item.id} {...item} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./Products.css";
import ProductCard from "../Cards/ProductCard";
// import ProductCardDesktop from "../ProductCardDesktop/ProductCardDesktop";
import { products as mock } from "../../assets/productsMock";

const categories = ["Nutri Bar", "Dosa Mix", "Breakfast Mix", "Pancake Mix"];

const Products = () => {
  const [activeCat, setActiveCat] = useState("Nutri Bar");
  const [data, setData] = useState([]);

  // Use react-responsive to detect device width
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
      {/* ----- Category Tabs ----- */}
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
    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M15 6l-6 6 6 6" stroke="#493003" strokeWidth="2" fill="none" /></svg>
  </button>
      {/* ----- Product Cards ----- */}
      <div className="pList">
        {filtered.map(item =>
          // isDesktopOrLaptop ? (
          //   <ProductCardDesktop key={item.id} {...item} />
          // ) : (
          //   <ProductCard key={item.id} {...item} />
          // )
          <ProductCard key={item.id} {...item}/>
        )}
      </div>
       <button className="arrow right" onClick={() => scroll("right")}>
    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M9 6l6 6-6 6" stroke="#493003" strokeWidth="2" fill="none" /></svg>
  </button>
    </section>
  );
};

export default Products;
