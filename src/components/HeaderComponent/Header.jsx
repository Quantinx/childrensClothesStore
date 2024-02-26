import React from "react";
import { useContext } from "react";
import { useCartPopup2 } from "../../providers/useCartPopup2";
import { ShopProvider2Context } from "../../providers/ShopProvider2";
import "./Header.css";

export default function Header() {
  const { totalItems } = useContext(ShopProvider2Context);
  const { togglePopup } = useCartPopup2();

  return (
    <header className="header-container">
      <h1>Primark</h1>
      <button onClick={togglePopup}> {totalItems} Cart</button>
    </header>
  );
}
