import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { ShopProviderContext } from "./providers/shopProvider";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import NewsletterPopup from "./components/NewsLetterPopup/NewsletterPopup";

import Popup from './components/Cart_Sidebar/Cart_Popup'

function App() {
  const { products, cartItems } = useContext(ShopProviderContext);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const alreadySubscribed = localStorage.getItem('alreadySubscribed');
    if (alreadySubscribed) {
      setShowPopup(false);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('alreadySubscribed', true);
  };

  return (
    <>
      <Header />
      <Shop />
      <Popup/>
      {showPopup && <NewsletterPopup closePopup={closePopup} />}
    </>
  );
}

export default App;
