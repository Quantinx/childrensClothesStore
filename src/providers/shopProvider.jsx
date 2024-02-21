import { useState, createContext } from "react";
import data from "../data.json";

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

  return (
    <ShopProviderContext.Provider value={value}>
      {children}
    </ShopProviderContext.Provider>
  );
};
