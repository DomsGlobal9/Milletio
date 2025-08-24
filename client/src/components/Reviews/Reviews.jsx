// import React, { useState, useEffect } from "react";
// import "./Reviews.css";
// import ReviewCard from "../../components/Cards/ReviewCard";
// import { reviews as mock } from "../../assets/reviewsMock";

// const Reviews = () => {
//   const [data, setData] = useState([]);
//   const [index, setIndex] = useState(0);

//   /* simulate fetch */
//   useEffect(() => setData(mock), []);

//   /* simple autoplay (optional) */
//   useEffect(() => {
//     const timer = setInterval(
//       () => setIndex(i => (i + 1) % data.length),
//       8000
//     );
//     return () => clearInterval(timer);
//   }, [data]);

//   if (!data.length) return null; // api not ready yet

//   const current = data[index];

//   return (
//     <section className="reviews">
//       <h2 className="reviews__heading">Reviews:</h2>

//       <ReviewCard {...current} />

//       {/* --- dots --- */}
//       <div className="dots">
//         {data.map((_, i) => (
//           <button
//             key={i}
//             className={`dot ${i === index ? "is-active" : ""}`}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to review ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Reviews;


import React, { useState, useEffect } from "react";
import "./Reviews.css";
import ReviewCard from "../../components/Cards/ReviewCard";
import { reviews as mock } from "../../assets/reviewsMock";
import Left_arrow from "../../assets/review_left_arrow.svg";
import Right_arrow from "../../assets/review_right_arrow.svg";
// SVGs for arrows (inline for demo, replace with your assets if needed)
// const ArrowLeft = () => (
//   <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15.5 19L9.5 12L15.5 5" stroke="#b2995a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// const ArrowRight = () => (
//   <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M8.5 5L14.5 12L8.5 19" stroke="#b2995a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );

const CARDS_PER_PAGE = 3;
const DESKTOP_MIN_WIDTH = 1024;

const Reviews = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DESKTOP_MIN_WIDTH);

  useEffect(() => setData(mock), []);

  // Responsive check
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= DESKTOP_MIN_WIDTH);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Autoplay for mobile only
  useEffect(() => {
    if (isDesktop) return;
    const timer = setInterval(
      () => setPage((p) => (p + 1) % data.length),
      8000
    );
    return () => clearInterval(timer);
  }, [data, isDesktop]);

  if (!data.length) return null;

  // Desktop: chunk into pages of 3
  let totalPages, cardsToShow;
  if (isDesktop) {
    totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
    const start = page * CARDS_PER_PAGE;
    cardsToShow = data.slice(start, start + CARDS_PER_PAGE);
    // If not enough cards at the end, wrap around from start
    if (cardsToShow.length < CARDS_PER_PAGE) {
      cardsToShow = [
        ...cardsToShow,
        ...data.slice(0, CARDS_PER_PAGE - cardsToShow.length)
      ];
    }
  } else {
    totalPages = data.length;
    cardsToShow = [data[page]];
  }

  // Navigation handlers
  const handlePrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const handleNext = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="reviews">
      <h2 className="reviews__heading">Story's of Milletio</h2>
      <div className={`reviews__carousel${isDesktop ? " is-desktop" : ""}`}>
        {isDesktop && (
          <button
            className="carousel-arrow left"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <img src={Left_arrow} alt="left"  width={20}/>
          </button>
        )}
        <div className="carousel-cards">
          {cardsToShow.map((review, i) => (
            <ReviewCard key={i + "-" + review.name} {...review} />
          ))}
        </div>
        {isDesktop && (
          <button
            className="carousel-arrow right"
            onClick={handleNext}
            aria-label="Next"
          >
             <img src={Right_arrow} alt="right" width={20} />
          </button>
        )}
      </div>
      {/* Dots for mobile only */}
      {!isDesktop && (
        <div className="dots">
          {data.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === page ? "is-active" : ""}`}
              onClick={() => setPage(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Reviews;
