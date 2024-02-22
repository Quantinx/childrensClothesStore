import React, { useState, createContext, useEffect } from "react";
import data from "../data.json";
const clothes = data.clothes;

export const ShopProviderContext = createContext();
export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(clothes);
  const [cart, setCart] = useState(() => {
    // Initialize cart with data from local storage, or an empty array if not available
    const storedCart = localStorage.getItem("cart");
    try {
      const parsedCart = JSON.parse(storedCart);
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Error parsing cart from local storage:", error);
      return [];
    }
  });

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemId) => {
    // Check if the item is already in the cart
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
      console.log(
        `Quantity of item ${itemId} increased to ${updatedCart[itemIndex].quantity}`
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      const newItem = { id: itemId, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const value = {
    products,
    addToCart,
    cart, // Making cart accessible to components using context
  };

  return (
    <ShopProviderContext.Provider value={value}>
      {children}
    </ShopProviderContext.Provider>
  );
};
