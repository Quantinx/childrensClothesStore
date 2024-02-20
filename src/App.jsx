import "./App.css";
import { useContext } from "react";
import { ShopProviderContext } from "./providers/shopProvider";
import Header from "./components/Header";
import Shop from "./pages/Shop";

function App() {
  const { products, cartItems } = useContext(ShopProviderContext);
  return (
    <>
      <Header />
      <Shop />
    </>
  );
}

export default App;
