import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import Shop from "./pages/ShopPage/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
