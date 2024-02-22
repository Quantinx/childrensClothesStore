import "./App.css";
import { useContext } from "react";
import { ShopProviderContext } from "./providers/shopProvider";
import Header from "./components/Header";
import Shop from "./pages/Shop";

import Popup from './components/Cart_Sidebar/Cart_Popup'

function App() {
  const { products, cartItems } = useContext(ShopProviderContext);
  return (
    <>
      <Header />
      <Shop />
      <Popup/>
    </>
  );
}

export default App;
