// // import React from "react";
// // import "../ProductCardDesktop/ProductCardDesktop.css"; // Use the desktop-specific CSS

// // const ProductCardDesktop = ({ title, price, img, liked, onAddToCart, id, toggleWishlist }) => (
// //   <article className="pCardDesktop">
// //     <div className="pCardDesktop__imgWrap">
// //       <img className="pCardDesktop__img" src={img} alt={title} loading="lazy" />
// //       <button
// //         className="pCardDesktop__heart"
// //         aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           toggleWishlist(id);
// //         }}
// //       >
// //         <svg viewBox="0 0 24 24" width="20" height="20" fill={liked ? "#e0245e" : "none"} stroke={liked ? "#e0245e" : "white"} strokeWidth="2">
// //           <path d="M12 21s-6.3-4.35-9.5-8.55C-1 7.49 2.42 2 7.5 2 9.74 2 12 3.44 12 3.44S14.26 2 16.5 2c5.08 0 8.5 5.49 5 10.45C18.3 16.65 12 21 12 21z" />
// //         </svg>
// //       </button>
// //     </div>
// //     <div className="pCardDesktop__text">
// //       <h3>{title}</h3>
// //       {/* <div className="pCardDesktop__subtext">
// //         <span>No Refined Sugar</span> | <span>Rich In Protein</span> | <span>Rich In Fiber</span>
// //       </div> */}
// //       <div className="pCardDesktop__footer">
// //         <span className="pCardDesktop__price">₹{price}</span>
// //         <button className="pCardDesktop__btn" onClick={(e) => { e.stopPropagation(); onAddToCart?.(id); }}>
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   </article>
// // );

// // export default ProductCardDesktop;


// import React from "react";
// import "./productCardDesktop.css";

// // --- demo data; replace with props / API data as needed ---
// const productss = [
//   {
//     id: 1,
//     name: "Almond Coffee Bliss Bar 50g",
//     image: "/assets/bars/almond‑coffee.png",
//     price: 89,
//     rating: 4.5,
//     bg: "#d0c8be", // warm grey
//   },
//   {
//     id: 2,
//     name: "Choco Berry Bar 50g",
//     image: "/assets/bars/choco‑berry.png",
//     price: 65,
//     rating: 4.5,
//     bg: "#dcd7ec", // lavender
//   },
//   {
//     id: 3,
//     name: "Nutty Choco Delight Bar 50g",
//     image: "/assets/bars/nutty‑choco.png",
//     price: 65,
//     rating: 4.5,
//     bg: "#f3e3bd", // sand
//   },
//   {
//     id: 4,
//     name: "Sesame Date Fusion Bar 50g",
//     image: "/assets/bars/sesame‑date.png",
//     price: 65,
//     rating: 4.5,
//     bg: "#f3d0d6", // dusty pink
//   },
// ];

// export default function ProductCardDesktop() {
//   return (
//     <section className="pcd-wrapper">
//       {/* <header className="pcd-header">
//         <h2 className="pcd-title">Our Products</h2>
//         <a href="/products" className="pcd-viewMore">
//           View more&nbsp;→
//         </a>
//       </header> */}

//       <div className="pcd-list">
//         {productss.map((p) => (
//           <article
//             key={p.id}
//             className="pcd-card"
//             style={{ backgroundColor: p.bg }}
//           >
//             <p className="pcd-cardTitle">{p.name}</p>

//             <div className="pcd-imgBox">
//               <img src={p.image} alt={p.name} />
//             </div>

//             <div className="pcd-priceRow">
//               <span className="pcd-mrp">M.R.P</span>
//               <span className="pcd-price">₹{p.price}</span>
//               <span className="pcd-rating">
//                 {p.rating} 
//               </span>
//             </div>

//             <button className="pcd-cartBtn">
//               Add to&nbsp;Cart&nbsp; 
//             </button>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
