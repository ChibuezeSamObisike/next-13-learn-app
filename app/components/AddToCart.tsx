"use client";

import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className='btn btn-primary mt-2'
        onClick={() => console.log("Button was clicked")}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
