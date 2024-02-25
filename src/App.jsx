// App.js

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/HeaderComponent/Header";
import Shop from "./pages/ShopPage/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import NewsletterPopup from "./components/NewsLetterPopup/NewsLetterPopup";

function App() {
  return (
    <ChakraProvider>
      <Header />
      
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      
      <Footer />
      
      <NewsletterPopup />
    </ChakraProvider>
  );
}

export default App;
