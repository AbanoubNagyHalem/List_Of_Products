import React from "react";
import icon from "../assets/images/icon-add-to-cart.svg";
import "./Landing.css";

const Card = ({ product, addToCart, removeFromCart, quantity }) => {
  const handleIncrease = () => {
    addToCart(product);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      removeFromCart(product.id, 1);
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
        <button
          className={`add-to-cart-button ${quantity ? "in-cart" : ""}`}
          onClick={quantity === 0 ? () => handleIncrease() : null}
        >
          {quantity ? (
            <div className="quantity-controls">
              <button className="decrease-button" onClick={handleDecrease}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="increase-button" onClick={handleIncrease}>
                +
              </button>
            </div>
          ) : (
            <>
              <img src={icon} alt="add to cart icon" />
              Add to Cart
            </>
          )}
        </button>
      </div>
      <div className="details">
        <p className="product-title">{product.title}</p>
        <p className="product-description">{product.desc}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default Card;
