import React from "react";
import "./Landing.css";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <div className="price-details">
          <p className="quantity">{item.quantity}x</p>
          <p className="price">@ ${item.price}</p>
          <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
      <button className="remove-button" onClick={() => removeFromCart(item.id)}>X</button>
    </div>
  );
};

export default CartItem;
