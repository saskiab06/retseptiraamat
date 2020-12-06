import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Recipe from "./components/Recipe";
import "./App.css";

const App = () => {
  let history = useHistory();

  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setRecipes(data);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  function addRecipe(newRecipe) {
    console.log(newRecipe);
    setRecipes((recipes) => [...recipes, newRecipe]);
  }

  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route path="/new">
            <NewRecipe addRecipe={addRecipe} history={history} />
          </Route>
          <Route path="/recipes/:id">
            <Recipe></Recipe>
          </Route>
          <Route path="/">
            <Header></Header>
            <RecipeList recipes={recipes}></RecipeList>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
