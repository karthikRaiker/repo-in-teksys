import React from "react";
import "./components.css";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">React Products</div>
      <div className="nav-cart">
        <div className="nav-cart-icon">
          <span>
            <FaShoppingCart />
          </span>
          Your Cart
        </div>
        <div className="nav-cart-count">3</div>
      </div>
    </div>
  );
}

export default NavBar;
