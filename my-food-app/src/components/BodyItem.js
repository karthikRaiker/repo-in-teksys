import React from "react";

function BodyItem({ title, description, price }) {
  return (
    <div className="Body-Item">
      <div className="Body-Item-text">
        <div className="name">{title}</div>
        <div className="description">{description}</div>
        <div className="price">${price}</div>
      </div>
      <div className="Body-Item-Controls">
        <div className="Input">
          <span>Quantity</span>
          <input type="text" />
        </div>
        <button>+Add</button>
      </div>
    </div>
  );
}

export default BodyItem;
