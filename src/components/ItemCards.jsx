import { useContext } from "react";
import { ShopProviderContext } from "../providers/shopProvider";
import addToCart from "../helpers/addToCart";

export default function ItemCards({ product }) {
  const { cartItems, setCartItems } = useContext(ShopProviderContext);

  function handleClick() {
    const newCart = addToCart(product.id, 1, cartItems);
    setCartItems(newCart);
  }
  return (
    <article style={{ border: "solid", width: "20rem", height: "25rem" }}>
      <h3>{product.name}</h3>
      <img
        src={product.image}
        srcSet="https://picsum.photos/200"
        alt={"image showing a" + product.name}
        height={200}
        width={200}
      ></img>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <button onClick={handleClick}>Add to Cart</button>
    </article>
  );
}
