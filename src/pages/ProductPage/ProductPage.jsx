import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./ProductPage.css";

import { ShopProvider2Context } from "../../providers/ShopProvider2";

const ProductPage = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopProvider2Context);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productDetails = products.find((product) => product.id === productId);
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productId, products]);

  const handleClick = () => {
    addToCart(product.id, product.name, product.price);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>{product.name}</h2>
      <div className="Product">
        <div>
          <img src={product.image} alt={product.name} />
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
