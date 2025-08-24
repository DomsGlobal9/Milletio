// import React from "react";
// import "../Recipes/Recipes.css"; // card styles live here
// // import avatar from "../../assets/recipes.png";
// import clock_timer from "../../assets/carbon_time.png";

// const RecipeCard = ({ text, name, avatar, time }) => (
//   <article className="recipe_card">
//     <img className="recipe_card__avatar" src={avatar} alt={name} />
//     <div className="recipe_card__footer">
//       <div className="recipe_title">
//         <h1 className="recipe_card__name">{name}</h1>
//         <p>{text}</p>
//       </div>
//       <div className="recipe_time">
//         <img src={clock_timer} alt="clock" />
//         <h2>{time}</h2>
//       </div>
//     </div>
//     <div className="recipe_view_btn">
//       <button>View Recipe</button>
//     </div>
//   </article>
// );

// export default RecipeCard;

// RecipeCard.jsx
import React from "react";
import "../Recipes/Recipes.css"
import clock_timer from "../../assets/carbon_time.png";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card__image-wrap">
        <img src={recipe.image} alt={recipe.title} className="recipe-card__image" />
        <div className="recipe-card__time">
          <span role="img" aria-label="clock"><img src={clock_timer} alt="clock"  width={20}/></span> {recipe.time}
        </div>
      </div>
      <div className="recipe-card__content">
        <h4 className="recipe-card__title">{recipe.title}</h4>
        <div className="recipe-card__tags">
          {recipe.tags.map((tag, i) => (
            <span key={i} className="recipe-card__tag">{tag}<span> |</span></span>
          ))}
        </div>
        <button className="recipe-card__button">View Recipe</button>
      </div>
    </div>
  );
}

