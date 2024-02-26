import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ShopProviderContext } from "../../providers/ShopProvider";
import "./ProductPage.css";
import addToCart from "../../helpers/addToCart";

const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopProviderContext);
  const [product, setProduct] = useState(null);
  const { cartItems, setCartItems, addItemToCart } =
    useContext(ShopProviderContext);
  function handleClick() {
    addItemToCart(product.id);
  }

  useEffect(() => {
    const productDetails = products.find((product) => product.id === productId);
    setProduct(productDetails);
  }, [productId, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Render product details
  return (
    <>
      <h2>{product.name}</h2>
      <div className="Product">
        <div>
          {" "}
          <img
            src={product.image}
            srcSet="https://picsum.photos/200"
            alt={product.name}
          />
        </div>
        <div>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
