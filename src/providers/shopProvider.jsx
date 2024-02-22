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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // Calculate total price whenever cart changes
    calculateTotalPrice();
  }, [cart]);

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.totalPrice;
    });
    setTotalPrice(total);
  };

  const addToCart = (itemId, name, price) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      updatedCart[itemIndex].totalPrice += price; // Increase totalPrice by the item's price
      setCart(updatedCart);
      console.log(
        `Quantity of item ${itemId} increased to ${updatedCart[itemIndex].quantity}`
      );
    } else {
      const newItem = {
        id: itemId,
        name: name,
        price: price,
        quantity: 1,
        totalPrice: price,
      }; // Set initial totalPrice to the item's price
      setCart([...cart, newItem]);
      console.log(`Item ${itemId} added to cart`);
    }
  };

  const value = {
    products,
    addToCart,
    cart,
    totalPrice,
  };

  return (
    <ShopProviderContext.Provider value={value}>
      {children}
    </ShopProviderContext.Provider>
  );
};
