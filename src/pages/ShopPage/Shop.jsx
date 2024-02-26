import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopProvider2Context } from "../../providers/ShopProvider2";
import ItemCards from "../../components/ItemCardsComponent/ItemCards";
import "./Shop.css";

export default function Shop() {
  const { products } = useContext(ShopProvider2Context);

  return (
    <div className="Box">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          style={{ textDecoration: "none", color: "inherit" }} //
        >
          <ItemCards product={product} />
        </Link>
      ))}
    </div>
  );
}
