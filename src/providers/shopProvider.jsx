import React, { useState, createContext, useEffect } from "react";
import data from "../data.json";
import { useState, createContext } from "react";
import PropTypes from "prop-types";
import data from "../data";
const clothes = data.clothes;

export const ShopProviderContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(clothes);
  const [cartItems, setCartItems] = useState(0);
  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
  };
  ShopProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <ShopProviderContext.Provider value={value}>
      {children}
    </ShopProviderContext.Provider>
  );
};
