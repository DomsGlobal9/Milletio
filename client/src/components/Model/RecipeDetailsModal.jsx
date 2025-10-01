// RecipeDetailsModal.jsx
import React from "react";
import "./RecipeDetailsModal.css";

export default function RecipeDetailsModal({ recipe, isOpen, onClose }) {
  if (!isOpen || !recipe) return null;

  return (
    <div className="recipe-modal__overlay" onClick={onClose}>
      <div className="recipe-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="recipe-modal__close" onClick={onClose}>
          ✕
        </button>

        <div className="recipe-modal__header">
          <img src={recipe.image} alt={recipe.title} className="recipe-modal__image" />
          <div>
            <h2 className="recipe-modal__title">{recipe.title}</h2>
            <p className="recipe-modal__time">⏱ {recipe.time}</p>
            <div className="recipe-modal__tags">
              {recipe.tags.map((tag, idx) => (
                <span key={idx} className="recipe-modal__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="recipe-modal__description">{recipe.description}</p>

        <div className="recipe-modal__steps">
          <h3>Recipe:</h3>
          {recipe.recipe
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, idx) => (
              <p key={idx} className="recipe-modal__step">{line}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
