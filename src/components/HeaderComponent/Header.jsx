import Cart from "../Cart";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="Cart">
        <Cart />
      </div>
      <div className="Header">
        <h1>Primark</h1>
      </div>
    </>
  );
}
