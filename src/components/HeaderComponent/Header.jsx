import Cart from "../Cart";
import Popup from "../Cart_Sidebar/Cart_Popup";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="Cart">
        <Cart />
      </div>
      <Popup />
      <div className="Header">
        <h1>Primark</h1>
      </div>
    </>
  );
}
