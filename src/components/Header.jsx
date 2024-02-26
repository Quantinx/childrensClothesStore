import { usePopup } from "../providers/useCartPopup";
import { ShopProviderContext } from "../providers/shopProvider";
import { useContext } from "react";

export default function Header() {
  const { togglePopup } = usePopup();
  const { totalItems } = useContext(ShopProviderContext);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>EXAMPLE SITE NAME</h1>
        <button onClick={togglePopup}>{totalItems} Cart</button>
      </div>
    </>
  );
}
