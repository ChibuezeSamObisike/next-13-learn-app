import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

//Server components can't handle click events

const ProductCard = () => {
  return (
    <div>
      <h1>ProductCard</h1>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
