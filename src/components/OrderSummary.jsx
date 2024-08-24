import React from "react";
import imgOrder from "../assets/images/icon-carbon-neutral.svg";
import "./Landing.css";

const OrderSummary = ({ totalPrice }) => (
  <div className="order-summary">
    <p className="total-price">
      Order Total: <span>${totalPrice}</span>
    </p>
    <p className="carbon-neutral">
      <img src={imgOrder} alt="carbon neutral icon" />
      This is a carbon-neutral delivery
    </p>
    <button className="confirm-order-button">Confirm Order</button>
  </div>
);

export default OrderSummary;
