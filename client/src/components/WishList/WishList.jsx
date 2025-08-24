import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WishList.css";

import starBadge from "../../assets/WL_star_icon.svg";
import MOCK_FAVS from "../../assets/favMockData";      // ✅ correct path

/* ---------- component ---------- */
export default function WishList() {
  /* Start with mock so something renders instantly */
  const [items, setItems] = useState(MOCK_FAVS);

  useEffect(() => {
    let cancel = false;

    axios.get("/api/favorite")
      .then(({ data }) => {
        /* normalize every possible envelope */
        const list =
          Array.isArray(data)           ? data :
          Array.isArray(data.items)     ? data.items :
          Array.isArray(data.payload)   ? data.payload :
          [];

        if (!cancel && list.length) setItems(list);  // overwrite only if we got something
      })
      .catch((err) => console.warn("Favorite fetch failed; keeping mock →", err));

    return () => { cancel = true; };
  }, []);

  /* ---------- render ---------- */
  return (
    <main className="fav">
      <header className="fav__header">Favorite</header>

      <div className="favGrid">
        {items.map(({ id, img, name, price, rating }) => (
          <article key={id} className="favCard">
            <div className="favCard__imgWrap">
              <img src={img} alt={name} />
              <span className="favCard__badge">
                <img src={starBadge} alt="star" />
                {rating}
              </span>
            </div>

            <div className="favCard__info">
              <h4 className="favCard__title">{name}</h4>
              <span className="favCard__price">₹{price}</span>
            </div>

            <button className="favCard__btn">View</button>
          </article>
        ))}
      </div>
    </main>
  );
}


// src/pages/WishList.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import "./WishList.css";
// import starBadge from "../../assets/WL_star_icon.svg";
// // import MOCK_PRODUCTS from "../../assets/productsMockData";   // full product list
// import { useWishlist } from "../../context/DataShare";

// /* ---------- component ---------- */
// export default function WishList() {
//   const navigate = useNavigate();
//   const { wishlist } = useWishlist();       // ← global array of IDs
//   const [items, setItems] = useState([]);   // products to render

//   /* whenever the ID list changes, resolve product objects */
//   useEffect(() => {
//     let cancel = false;

//     if (!wishlist.length) {
//       setItems([]);                         // nothing saved
//       return;
//     }

//     /* 1) try the API -------------------------------------------------- */
//     axios
//       .get("/api/products", { params: { ids: wishlist.join(",") } })
//       .then(({ data }) => {
//         const list =
//           Array.isArray(data)         ? data :
//           Array.isArray(data.items)   ? data.items :
//           Array.isArray(data.payload) ? data.payload :
//           [];

//         if (!cancel && list.length) {
//           setItems(list);             // success 🎉
//         } else if (!cancel) {
//           /* 2) API returned empty → fall back to mock */
//           const mock = MOCK_PRODUCTS.filter((p) =>
//             wishlist.includes(String(p.id))
//           );
//           setItems(mock);
//         }
//       })
//       .catch((err) => {
//         console.warn("Product fetch failed; falling back to mock →", err);
//         if (!cancel) {
//           const mock = MOCK_PRODUCTS.filter((p) =>
//             wishlist.includes(String(p.id))
//           );
//           setItems(mock);
//         }
//       });

//     return () => {
//       cancel = true;
//     };
//   }, [wishlist]);

//   /* ---------- render ---------- */
//   return (
//     <main className="fav">
//       <header className="fav__header">Wishlist</header>

//       {!items.length ? (
//         <p style={{ padding: "1rem" }}>Your wishlist is empty.</p>
//       ) : (
//         <div className="favGrid">
//           {items.map(({ id, img, name, price, rating }) => (
//             <article key={id} className="favCard">
//               <div className="favCard__imgWrap">
//                 <img src={img} alt={name} />
//                 {rating && (
//                   <span className="favCard__badge">
//                     <img src={starBadge} alt="" />
//                     {rating}
//                   </span>
//                 )}
//               </div>

//               <div className="favCard__info">
//                 <h4 className="favCard__title">{name}</h4>
//                 <span className="favCard__price">₹{price}</span>
//               </div>

//               <button
//                 className="favCard__btn"
//                 onClick={() => navigate(`/products/${id}`)}
//               >
//                 View
//               </button>
//             </article>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }
