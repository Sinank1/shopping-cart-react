import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

const App = () => {
  const [products] = useState([
    { id: 1, name: "Ürün 1", price: 100 },
    { id: 2, name: "Ürün 2", price: 150 },
    { id: 3, name: "Ürün 3", price: 200 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Alışveriş Sepeti Uygulaması</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
