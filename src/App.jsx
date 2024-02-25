import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/HeaderComponent/Header";
import Shop from "./pages/ShopPage/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";

import Popup from './components/Cart_Sidebar/Cart_Popup'

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </ChakraProvider>
      <Header />
      <Shop />
      <Popup/>
    </>
  );
}

export default App;
