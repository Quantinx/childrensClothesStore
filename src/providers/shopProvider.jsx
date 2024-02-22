import React, { useState, createContext, useEffect } from "react";
import data from "../data.json";
const clothes = data.clothes;

export const ShopProviderContext = createContext();
export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(clothes);
  const [cart, setCart] = useState(() => {
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
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemId, name, price) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);
    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
      console.error(`Invalid price: ${price}`);
      return;
    }

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      updatedCart[itemIndex].totalPrice = (
        updatedCart[itemIndex].quantity * parsedPrice
      ).toFixed(2);
      setCart(updatedCart);
      console.log(
        `Quantity of item ${itemId} increased to ${updatedCart[itemIndex].quantity}`
      );
    } else {
      const newItem = {
        id: itemId,
        name: name,
        price: parsedPrice,
        quantity: 1,
        totalPrice: parsedPrice.toFixed(2),
      };
      setCart([...cart, newItem]);
      console.log(`Item ${itemId} added to cart`);
    }
  };

  const value = {
    products,
    addToCart,
    cart,
  };

  return (
    <ShopProviderContext.Provider value={value}>
      {children}
    </ShopProviderContext.Provider>
  );
};
