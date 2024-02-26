import { useContext } from "react";
import { usePopup } from "../../providers/useCartPopup";
import { ShopProviderContext } from "../../providers/ShopProvider";
import "./Cart_Popup.css";

const Popup = () => {
  const { isOpen, togglePopup } = usePopup();
  const { cartItems, removeItem, clearCart } = useContext(ShopProviderContext);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  console.log(cartItems);
  const totalPrice = cartItems
    .reduce((total, item) => total + parseFloat(item.totalPrice), 0)
    .toFixed(2);

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
            {cartItems.map(({ id, name, quantity, totalPrice }) => (
              <li key={id}>
                {quantity} x {name} = {`${totalPrice} SEK`}{" "}
                <button onClick={() => handleRemoveItem(id)}>
                  Remove Item
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Total price: {totalPrice} SEK</p>
        </div>

        <div>
          <button>checkout</button>
          <button onClick={clearCart}>Clear</button>
          <button className="close-btn2" onClick={togglePopup}>
            Close the cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
