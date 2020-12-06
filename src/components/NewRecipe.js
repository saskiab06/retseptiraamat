import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./NewRecipe.css";

const NewRecipe = (props) => {
  const [newRecipe, setNewRecipe] = useState({});
  const [recipeName, setRecipeName] = useState("");
  const [recipeTime, setRecipeTime] = useState("");
  const [recipeTags, setRecipeTags] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [ingredient6, setIngredient6] = useState("");
  const [recipeDirections, setRecipeDirections] = useState("");

  function combineNewRecipe(e) {
    e.preventDefault();

    let ingredientList = [];
    let tagList = [];

    for (let i of [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
    ]) {
      if (i !== "") {
        let name = i.split(" ")[0];
        let quantity = i.split(" ")[1];
        ingredientList.push({ name: name, quantity: quantity });
      }
    }

    for (let tag of recipeTags.split(",")) {
      console.log(tag);
      tagList.push(tag.trim());
    }
    setNewRecipe({
      name: recipeName,
      duration: recipeTime,
      tags: tagList,
      ingredients: ingredientList,
      preparation: recipeDirections,
    });
  }

  useEffect(() => {
    console.log("Efekti sees", newRecipe);
    if (Object.keys(newRecipe).length !== 0) {
      props.addRecipe(newRecipe);
      props.history.push("/");
    }
  }, [newRecipe]);

  return (
    <div className="new-recipe">
      <h2>Lisa uus retsept</h2>
      <form className="new-recipe-form">
        <label htmlFor="name">Nimi</label>
        <input
          type="text"
          id="name"
          onInput={(e) => {
            setRecipeName(e.target.value);
          }}
        />
        <label htmlFor="tags">Sildid</label>
        <input
          type="text"
          id="tags"
          onInput={(e) => {
            setRecipeTags(e.target.value);
          }}
        />
        <label htmlFor="time">Valmistusaeg (min) </label>
        <input
          type="number"
          min="0"
          id="time"
          onInput={(e) => {
            setRecipeTime(e.target.value);
          }}
        />
        {}
        <label htmlFor="ingredients" className="new-recipe-ingredients">
          Koostisained
          <input
            type="text"
            onChange={(e) => {
              setIngredient1(e.target.value);
            }}
          />
          <input
            type="text"
            onInput={(e) => {
              setIngredient2(e.target.value);
            }}
          />
          <input
            type="text"
            onInput={(e) => {
              setIngredient3(e.target.value);
            }}
          />
          <input
            type="text"
            onInput={(e) => {
              setIngredient4(e.target.value);
            }}
          />
          <input
            type="text"
            onInput={(e) => {
              setIngredient5(e.target.value);
            }}
          />
          <input
            type="text"
            onInput={(e) => {
              setIngredient6(e.target.value);
            }}
          />
        </label>
        <label htmlFor="directions">Valmistamine </label>
        <textarea
          id="directions"
          className="new-recipe-directions"
          onInput={(e) => {
            setRecipeDirections(e.target.value);
          }}
        ></textarea>
        <input
          type="submit"
          value="Salvesta"
          onClick={(e) => combineNewRecipe(e)}
        />
      </form>
    </div>
  );
};

export default withRouter(NewRecipe);
