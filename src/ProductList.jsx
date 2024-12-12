import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Fiyat: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Sepete Ekle</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
