import React, { useContext } from "react";
import { usePopup } from "../../providers/useCartPopup";
import { ShopProviderContext } from "../../providers/shopProvider";
import "./Cart_Popup.css";

const Popup = () => {
  const { isOpen, togglePopup } = usePopup();
  const { cart } = useContext(ShopProviderContext);
  console.log(cart);
  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={togglePopup}>
        X
      </button>
      <div className="popup-content">
        <div>
          <h2>Your Cart:</h2>
        </div>
        <div>
          <ul>
            {cart.map(({ id, name, price, quantity, totalPrice }) => (
              <li key={id}>
                {quantity} : {name}= {`${totalPrice} SEK`}{" "}
                <button>remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>total price:</p>
        </div>

        <div>
          <button>checkout</button>
          <button>Clear</button>
          <button className="close-btn2" onClick={togglePopup}>
            Close the cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
