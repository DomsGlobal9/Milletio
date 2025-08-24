

// const ProductCard = ({ id, title, img, price, onAddToCart }) => {
//   const [liked, setLiked] = useState(false);
//   const navigate = useNavigate();
//   const handleCardClick = () => navigate(`/products/${id}`);

//   const handleWishClick  = (e) => {
//     e.stopPropagation();           // ← don’t follow the link
//     setLiked((v) => !v);
//     onToggleWish?.(id);            // (optional) bubble up
//   };
//   return (
//     <article className="pCard" onClick={handleCardClick}>
      
//       <div className="pCard__text">
//         <h3>{title}</h3>

//         <div className="pCard_sub_text">
//           <div><span>No Refined <br /> Sugar</span></div><hr />
//           <div><span>Rich In Protein</span></div><hr />
//           <div><span>Rich In Fiber</span></div>
//         </div>

//         <div className="pCard__footer">
//           <span className="pCard__price">
//             <span className="pCard_rupee_symbol">₹</span> {price}
//           </span>

//           {/* keep “Add to cart” from triggering the navigation */}
//           <button
//             className="pCard__btn"
//             onClick={(e) => {
//               e.stopPropagation();
//               onAddToCart?.(id);
//             }}
//           >
//             Add to cart
//           </button>
//         </div>
//       </div>

//       <img className="pCard__img" src={img} alt={title} loading="lazy" />
//     </article>
//   );
// };

// export default ProductCard;
// …imports stay the same …
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/Products/Products.css";
import { useState } from "react";
import { StateContext, useWishlist } from "../../context/DataShare";    
import SignInModal from "../Model/Model";
import Cookies from 'js-cookie';
const ProductCard = ({ id, title, img, price, onAddToCart }) => {

  const {open,setOpen}=useContext(StateContext)
  const navigate = useNavigate();
  const handleCardClick = () => navigate(`/products/${id}`);
    const { wishlist, toggleWishlist } = useWishlist();            // NEW
  const liked = wishlist.includes(id);  

  const CheckLogin=()=>{
    const token = Cookies.get('token');
    if(!token){
      setOpen(true)
    }
  }

  return (
    <article className="pCard" onClick={handleCardClick}>
  <div className="pCard__text">
        <h3>{title}</h3>

        <div className="pCard_sub_text">
          <div><span>No Refined <br /> Sugar</span></div><hr />
          <div><span>Rich In Protein</span></div><hr />
          <div><span>Rich In Fiber</span></div>
        </div>

        <div className="pCard__footer">
          <span className="pCard__price">
            <span className="pCard_rupee_symbol">₹</span> {price}
          </span>

          {/* keep “Add to cart” from triggering the navigation */}
          <button
            className="pCard__btn"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
              CheckLogin()
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* ⬇︎  just this wrapper + button added */}
      <div className="pCard__imgWrap">
        <img className="pCard__img" src={img} alt={title} loading="lazy" />

        <button
          className="pCard__heart"
           aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.stopPropagation();      // prevent navigation
            /* TODO: toggle wishlist here */
             toggleWishlist(id); 
          }}
          
        >
          {/* use inline SVG or an icon file – outline / filled swap up to you */}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill={liked ? "#e0245e" : "none"}
          stroke={liked ? "#e0245e" : "white"}
          strokeWidth="2"
        >
          <path d="M12 21s-6.3-4.35-9.5-8.55C-1 7.49 2.42 2 7.5 2 9.74 2 12 3.44 12 3.44S14.26 2 16.5 2c5.08 0 8.5 5.49 5 10.45C18.3 16.65 12 21 12 21z" />
        </svg>
        </button>
      </div>
      <SignInModal open={open} onClose={() => setOpen(false)}/>
    </article>
    
  );
};

export default ProductCard;
