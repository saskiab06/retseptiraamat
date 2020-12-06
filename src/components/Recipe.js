import React from "react";
import { withRouter, Link } from "react-router-dom";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  render() {
    let recipe = this.props.location.state.recipe;
    return (
      <div>
        <Link className="link" to="/">
          &#8617; tagasi avalehele
        </Link>
        <h2>{recipe.name}</h2>
        <p>{recipe.duration} min</p>
        <ul>
          {recipe.ingredients.map((ingredient, i) => {
            return (
              <li
                key={ingredient.name + i}
              >{`${ingredient.quantity} ${ingredient.name}`}</li>
            );
          })}
        </ul>
        <p>{recipe.preparation}</p>
      </div>
    );
  }
}

export default withRouter(Recipe);
