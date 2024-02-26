import PropTypes from "prop-types";
import { useContext } from "react";

import { ShopProvider2Context } from "../../providers/ShopProvider2";

import "./ItemCards.css";
import { Button } from "@chakra-ui/react";

export default function ItemCards({ product }) {
  const { addToCart } = useContext(ShopProvider2Context);

  ItemCards.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

  const handleClick = () => {
    addToCart(product.id, product.name, product.price);
  };

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
            handleClick();
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
