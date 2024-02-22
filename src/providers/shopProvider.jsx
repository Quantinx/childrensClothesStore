import React, { useState, createContext, useContext } from "react";
import data from "../data.json";
const clothes = data.clothes;

export const ShopProviderContext = createContext();
export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(clothes);

  const addToCart = (itemId) => {
    console.log(`item ${itemId} added to cart`);
  };

  const value = {
    products,
    addToCart,
  };

  return (
    <ShopProviderContext.Provider value={value}>
      {children}
    </ShopProviderContext.Provider>
  );
};
