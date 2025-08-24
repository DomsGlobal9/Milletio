import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; 
import main_img from "../../assets/product_item_one.jpg"
import sub_item2 from "../../assets/product_sub_item2.svg";
import sub_item3 from "../../assets/product_sub_item3.svg";
import sub_item4 from "../../assets/product_sub_item4.svg";
import ReviewCard from "../Cards/ReviewCard";
import Reviews from "../Reviews/Reviews";

/* -------------------------------------------------------
   Replace this with a real fetch or context selector.
   It just lets the component render while you hook up data.
------------------------------------------------------- */
const MOCK = [
  {
    id: "1",
    title: "Choco Berry Crunch Nutri Bar (50 g)",
    desc: "A fruity and refreshing nutri bar loaded with the goodness of mixed berries.",
    price: 65,
    oldPrice: 149,
    discountLabel: "55%",
    images: [main_img,  sub_item2, sub_item3, sub_item4],

    highlights: [
      "No Refined Sugar",
      "Rich in Protein",
      "Rich in Fiber",
      "Gluten Free",
      "No Preservatives"
    ],

    nutrition: [
      { nutrient: "Energy", amount: "214 kcal" },
      { nutrient: "Protein", amount: "5.3 g" },
      { nutrient: "Carbohydrates", amount: "27.6 g" },
      { nutrient: "Sugars", amount: "7.2 g" },
      { nutrient: "Dietary Fiber", amount: "3.8 g" },
      { nutrient: "Total Fat", amount: "9.6 g" },
      { nutrient: "Saturated Fat", amount: "2.4 g" }
    ],

        reviews: [
      {
        reviewer: "Amit Sharma",
        rating: 5,
        desc: "Absolutely delicious and healthy! Perfect snack for my gym routine.",
        points: ["Tasty", "High protein", "No sugar crash"]
      },
      {
        reviewer: "Priya Singh",
        rating: 4,
        desc: "Great flavor and texture, but a bit pricey.",
        points: ["Good taste", "Nutritious", "A little expensive"]
      },
      {
        reviewer: "Rahul Verma",
        rating: 3,
        desc: "Decent bar, but could use more berries.",
        points: ["Okay flavor", "Needs more fruit"]
      },
      {
        reviewer: "Sneha Patel",
        rating: 2,
        desc: "Not a fan of the aftertaste.",
        points: ["Weird aftertaste"]
      },
      {
        reviewer: "Vikas Kumar",
        rating: 1,
        desc: "Did not like the texture at all.",
        points: ["Bad texture"]
      }
    ]
  
  }


  
  // ...other items
];

function getRatingData(reviews) {
  const ratingCounts = [5, 3, 2, 1, 0]; // index 0: 5 stars, 4 stars, etc.
  reviews.forEach(r => {
    ratingCounts[5 - r.rating]++;
  });
  const total = reviews.length;
  const avg = total ? (reviews.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1) : 0;
  return { ratingCounts, total, avg };
}



const  ProductDetails=()=> {

   const [reviewData, setReviewData] = useState({
    rating: 0,
    numReviews: 0,
    reviews: [],
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviewData(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
    
  const { id } = useParams();
  const product = MOCK.find((p) => p.id === id) || MOCK[0];

  const [data, setData] = useState([]);
  
    /* simulate fetch */
    useEffect(() => {
      // Replace with axios.get("/api/products") in future
    //   setData(mock);
    }, []);
  
    const filtered = data.filter(p => p.category === activeCat);
 const reviews = MOCK[0].reviews;
  const { ratingCounts, total, avg } = getRatingData(reviews);
  const [mainImg, setMainImg] = useState(product.images[0]);
  const [qty, setQty] = useState(1);

  return (
    <section className="productDetails">
      {/* ---------- gallery ---------- */}
      <div className="productDetails__gallery">
        <img
          src={mainImg}
          alt={product.title}
          className="productDetails__mainImg"
        />

        <div className="productDetails__thumbnails">
          {product.images.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`productDetails__thumb${
                mainImg === src ? "productDetails__thumb--active" : ""
              }`}
              width={100}
              height={100}
              onClick={() => setMainImg(src)}
            />
          ))}
        </div>
      </div>

      {/* ---------- info ---------- */}
      <div className="productDetails__info">
        <h2 className="productDetails__title">{product.title}</h2>
        <p className="productDetails__desc">
          {product.desc}{" "}
          <span className="productDetails__readMore">Read more.</span>
        </p>
        <div className="ProductDetails_sub_info">
        <div className="productDetails__priceWrap">
             <h5 className="productDetails__oldPrice">M.R.P ₹{product.oldPrice}</h5>
          <span className="productDetails__discount">
            {product.discountLabel}
          </span>
          <span className="productDetails__price"><span className="productDetails_price_symbol">₹</span>{product.price}</span>
        </div>

        <div className="productDetails__qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>＋</button>
        </div>
        </div>
        <div>
            <p className="productDetails_tax_desc">Tax include.shipping calcilated at checkout. </p>
        </div>
        <button className="btn addToCart">Add to Cart</button>
        <button className="btn buyNow">Buy Now</button>
      </div>
      {/* product Details */}
      <div className="productDetails_desc_under_buynow">
          <div>
             <h4 className="productDetails_desc_under_buynow_heading">Product details:</h4>
             <p> {product.desc}</p>
          </div>
         <div>
             <h4 className="productDetails_desc_under_buynow_heading">Highlights:</h4>
               <ul className="productDetails__highlights">
                {product.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
          </div>
          <div>
            <table className="productDetails__table">
                <thead>
                    <tr>
                    <th>Nutrient</th>
                    <th>Amount (per 50g)</th>
                    </tr>
                </thead>
                <tbody>
                    {product.nutrition.map((item, i) => (
                    <tr key={i}>
                        <td>{item.nutrient}</td>
                        <td>{item.amount}</td>
                    </tr>
                    ))}
                     <tr className="table-bottom-text">
                    <td colSpan={2} style={{ textAlign: "center" }}>
                      *Daily Values are based on FASSAI RDA.
                    </td>
                  </tr>
                </tbody>
                </table>
          </div>
      </div>
{/* //reviewsSection */}
     <div className="review-summary-container">
      <h3 className="review-summary-title">Reviews:</h3>
      <div className="review-summary-main">
        <div className="review-summary-bars">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div className="review-summary-bar-row" key={star}>
              <span className="review-summary-star">{star} <span className="star-icon">⭐</span></span>
              <div className="review-summary-bar-bg">
                <div
                  className="review-summary-bar-fill"
                  style={{
                    width: total ? `${(ratingCounts[5 - star] / total) * 100}%` : "0%"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="review-summary-score">
          <div className="review-summary-avg">{avg}</div>
          <div className="review-summary-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(avg) ? "star-icon filled" : "star-icon"
                }
              >
                ★
              </span>
            ))}
          </div>
          <div className="review-summary-count">{total} Reviews</div>
        </div>
      </div>
    </div>
    {/* reviewCard  */}
    <div>
      {/* <ReviewCard/> */}
      <Reviews/>
    </div>
   {/* other products */}
   <div className="other_products">
    <h5>Other products:</h5>
        <div className="other_products_images">
          {product.images?.slice(1, 3).map((p) => (
            <img key={p.id} src={p.images} alt={p.title} />
          ))}
        </div>
   </div>
      
    </section>
  );
}

export default ProductDetails;
