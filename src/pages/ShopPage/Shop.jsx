import { useContext } from "react";
import { Link } from "react-router-dom"; 
import { ShopProviderContext } from "../../providers/ShopProvider"; 
import ItemCards from "../../components/ItemCardsComponent/ItemCards"; 
import "./Shop.css"; 

export default function Shop() {
  const { products } = useContext(ShopProviderContext);

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
