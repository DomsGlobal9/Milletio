// RecipeList.jsx
import {React,useState} from "react";

import recipes from "../../assets/reciepesMock";
import RecipeCard from "../Cards/RecipeCard";
import "./Recipes.css";
import RecipeDetailsModal from "../Model/RecipeDetailsModal";

export default function Recipes() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <section className="recipes-section">
      <div className="recipes-section__header">
        <span className="recipes-section__title">Recipes:</span>
        <a href="/recipes" className="recipes-section__more">View more &rarr;</a>
      </div>
      <div className="recipes-section__carousel">
        {recipes.map(recipe => (
          
            <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
          <RecipeCard  recipe={recipe} />
          </div>
        ))}
      </div>
      
       <RecipeDetailsModal
        recipe={selectedRecipe}
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
      {/* <div className="recipes-section__dots">
        {recipes.map((_, idx) => (
          <span className={`dot${idx === 0 ? " active" : ""}`} key={idx}></span>
        ))}
      </div> */}
      <div className="recipes-section__dots">
        {recipes.map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === 0 ? " active" : ""}`} 
            onClick={() => handleDotClick(idx)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>


    </section>
  );
}