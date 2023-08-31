import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="nav">
      <h1>React Rouetr Tutorial</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
