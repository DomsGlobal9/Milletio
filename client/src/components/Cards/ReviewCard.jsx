import React from "react";
import "../Reviews/Reviews.css"; // card styles live here
import avatar from "../../assets/Icon Strategy.svg";

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#FFD700">
    <polygon points="10,1 12.6,7.5 19.5,7.5 13.9,11.9 16.5,18.5 10,14.2 3.5,18.5 6.1,11.9 0.5,7.5 7.4,7.5" />
  </svg>
);
const ReviewCard = ({ text, name, avatar ,rating = 5 }) => {
  return (
    <>
      <article className="rCard">
        <div className="rCard__footer">
          <img className="rCard__avatar" src={avatar} alt={name} />
          <div className="rCard_name_star">
          <span className="rCard__name">{name}</span>
          <div className="rCard__stars">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        </div>
        </div>
        <p className="rCard__text">{text}</p>
      </article>
    </>
  );
};

export default ReviewCard;
