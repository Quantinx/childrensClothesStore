import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/HeaderComponent/Header";
import Shop from "./pages/ShopPage/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import NewsletterPopup from "./components/NewsLetterPopup/NewsLetterPopup"; 

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <NewsletterPopup />
      </ChakraProvider>
    </>
  );
}

export default App;
