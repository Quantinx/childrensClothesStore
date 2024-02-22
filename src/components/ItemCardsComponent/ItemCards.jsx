import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopProviderContext } from "../../providers/ShopProvider";
import addToCart from "../../helpers/addToCart";
import "./ItemCards.css";
import { Button } from "@chakra-ui/react";

export default function ItemCards({ product }) {
  const { cartItems, setCartItems } = useContext(ShopProviderContext);

  ItemCards.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

  function onAdd() {
    const newCart = addToCart(product.id, 1, cartItems);
    setCartItems(newCart);
  }
  return (
    <article className="body">
      <h3>{product.name}</h3>
      <img
        src={product.image}
        srcSet="https://picsum.photos/200"
        alt={"image showing a" + product.name}
        height={200}
        width={200}
      ></img>
      <div>{product.description}</div>
      <div className="price-button">
        {product.price}
        <Button
          onClick={(e) => {
            e.preventDefault();
            onAdd(product.id);
          }}
          colorScheme="teal"
          size="md"
        >
          BUY
        </Button>
      </div>
    </article>
  );
}
