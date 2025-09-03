// import React from "react";
// import { Star } from "lucide-react";
// import { bestSellers } from "../../assets/bestSellerMock";
// import "./bestseller.css"; // dedicated stylesheet

// export function BestSeller() {
//   return (
//     <section className="best-seller-section">
//       <h2>Best Seller</h2>

//       <div className="product-grid">
//         {bestSellers.map((item) => (
//           <div className="product-card" key={item.id}>
//             {/* Image & rating badge */}
//             <div
//               className="product-img-container"
//             >
//               <img src={item.img} alt={item.name} />

//               <div className="rating-badge">
//                 <Star size={12} />
//                 {item.rating}
//               </div>
//             </div>

//             {/* Details */}
//             <div className="product-details">
//                 <div className="sub_product_detail">
//                     <div><h3>{item.name}</h3></div>
//                     <div><span className="product-price">₹{item.price}</span></div>
//                 </div>
//               <button className="add-to-cart-btn">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useMediaQuery } from "react-responsive";
import { Star } from "lucide-react";
import { bestSellers } from "../../assets/bestSellerMock";
import "./BestSeller.css";

export function BestSeller() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className="best-seller-section">
      <h2 className="best-seller-title">Best Seller</h2>
      <div className="product-grid">
        {bestSellers.map((item) =>
          isDesktop ? (
            // Desktop/Laptop Card
            <div className="product-card-desktop" key={item.id}>
              <div
                className="product-card__img-col"
                style={{ background: item.bgColor }}
              >
                <svg
                  className="product-card__heart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="red"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                </svg>
                <img src={item.img} alt={item.name} />
              </div>
              <div className="product-card__info-col">
                <div className="product-card__top">
                  <div className="product-card__name">{item.name}</div>
                  {item.isBestSeller && (
                    <span className="product-card__badge">Best Seller</span>
                  )}
                </div>
                <div className="product-card__desc">{item.subtitle}</div>
                <div className="product-card__meta">
                  <span className="product-card__price">₹{item.price}</span>
                  <span className="product-card__rating">
                    <Star size={14} className="star-icon" />
                    {item.rating}
                    <span className="product-card__rating-count">
                      ({item.ratingCount})
                    </span>
                  </span>
                </div>
                <button className="product-card__btn" disabled>
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            // Mobile Card (original structure)
            <div className="product-card" key={item.id}>
              <div className="product-img-container">
                <img src={item.img} alt={item.name} />
                <div className="rating-badge">
                  <Star size={12} />
                  {item.rating}
                </div>
              </div>
              <div className="product-details">
                <div className="sub_product_detail">
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    <span className="product-price">₹{item.price}</span>
                  </div>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
