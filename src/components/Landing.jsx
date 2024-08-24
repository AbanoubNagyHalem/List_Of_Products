import { useState } from "react";
import Card from "./Card";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import imgWaffle from "../assets/images/image-waffle-desktop.jpg";
import imgCreme from "../assets/images/image-creme-brulee-desktop.jpg";
import imgMacaron from "../assets/images/image-macaron-desktop.jpg";
import imgTiramisu from "../assets/images/image-tiramisu-desktop.jpg";
import imgBaklava from "../assets/images/image-baklava-desktop.jpg";
import imgCake from "../assets/images/image-cake-desktop.jpg";
import imgBrownie from "../assets/images/image-brownie-desktop.jpg";
import imgPanna from "../assets/images/image-panna-cotta-desktop.jpg";
import imgEmpty from "../assets/images/illustration-empty-cart.svg";
import "./Landing.css";

const Landing = () => {
  const [data] = useState([
    {
      id: 1,
      image: imgWaffle,
      title: "Waffle",
      desc: "Waffle with Berries",
      price: "6.50",
    },
    {
      id: 2,
      image: imgCreme,
      title: "Creme Brulee",
      desc: "Vanilla Bean Creme Brulee",
      price: "7.00",
    },
    {
      id: 3,
      image: imgMacaron,
      title: "Macaron",
      desc: "Macaron Mix of Five",
      price: "8.00",
    },
    {
      id: 4,
      image: imgTiramisu,
      title: "Tiramisu",
      desc: "Classic Tiramisu",
      price: "5.50",
    },
    {
      id: 5,
      image: imgBaklava,
      title: "Baklava",
      desc: "Pistachio Baklava",
      price: "4.00",
    },
    {
      id: 6,
      image: imgCake,
      title: "Cake",
      desc: "Red Velvet Cake",
      price: "4.50",
    },
    {
      id: 7,
      image: imgBrownie,
      title: "Salted Caramel Brownie",
      desc: "Salted Caramel Brownie",
      price: "7.00",
    },
    {
      id: 8,
      image: imgPanna,
      title: "Panna Cotta",
      desc: "Vanilla Panna Cotta",
      price: "6.50",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      return existingItem
        ? prevItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id, quantityChange = 0) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        if (quantityChange === 0 || existingItem.quantity === 1) {
          return prevItems.filter((item) => item.id !== id);
        } else {
          return prevItems.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity - quantityChange }
              : item
          );
        }
      }
      return prevItems;
    });
  };

  const getItemQuantity = (id) =>
    cartItems.find((cartItem) => cartItem.id === id)?.quantity || 0;
  const getTotalItems = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const getTotalPrice = () =>
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <div className="landing-page">
      <div className="container content-container">
        <div className="products-section">
          <h2>Desserts</h2>
          <div className="product-list">
            {data.map((product) => (
              <Card
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                quantity={getItemQuantity(product.id)}
              />
            ))}
          </div>
        </div>
        <div className="cart-section">
          <h2>Your Cart ({getTotalItems()})</h2>
          <div className="cart-content">
            {cartItems.length === 0 ? (
              <>
                <img width="200px" src={imgEmpty} alt="empty cart" />
                <p>Your added items will appear here</p>
              </>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                  />
                ))}
                <OrderSummary totalPrice={getTotalPrice()} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
