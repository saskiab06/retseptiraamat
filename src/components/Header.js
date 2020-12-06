import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="heading">
      <h1>Retseptiraamat</h1>
      <Link className="button" to="/new">
        Lisa uus retsept
      </Link>
    </header>
  );
};

export default Header;
