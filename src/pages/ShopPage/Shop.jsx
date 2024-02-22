import { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link
import { ShopProviderContext } from "../../providers/ShopProvider"; // Adjust the import path as necessary
import ItemCards from "../../components/ItemCardsComponent/ItemCards"; // Adjust the import path as necessary
import "./Shop.css"; // Ensure the CSS path is correct

export default function Shop() {
  const { products } = useContext(ShopProviderContext); // Get products from context

  return (
    <div className="Box">
      {products.map((product) => (
        // Wrap each ItemCards component in a Link for navigation
        <Link
          to={`/product/${product.id}`} // Dynamic route based on product ID
          key={product.id}
          style={{ textDecoration: "none", color: "inherit" }} // Style to remove default link styling
        >
          <ItemCards product={product} />
        </Link>
      ))}
    </div>
  );
}
