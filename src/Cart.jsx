import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Sepet</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(index)}
                style={{ backgroundColor: "#dc3545" }}
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Toplam Fiyat: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
