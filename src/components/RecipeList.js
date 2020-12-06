import React from "react";
import { Link } from "react-router-dom";

import "./RecipeList.css";

const RecipeList = (props) => {
  return (
    <div className="recipes-list">
      {props.recipes.map((recipe) => {
        return (
          <li className="recipe" key={recipe.name + recipe.duration}>
            <span>
              <h3 className="recipe-heading">{recipe.name}</h3>
              <p className="recipe-time">{recipe.duration} min</p>
              {recipe.tags.map((tag) => {
                return (
                  <span key={tag} className="recipe-tag">
                    {tag}
                  </span>
                );
              })}
            </span>
            <Link
              className="link"
              to={{
                pathname: `/recipes/${recipe.name.split(" ").join("_")}`,
                state: { recipe: recipe },
              }}
            >
              Vaata lähemalt
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default RecipeList;
