import { useContext } from "react";
import ItemCards from "../components/ItemCards";
import { ShopProviderContext } from "../providers/shopProvider";

export default function Shop() {
  const { products, setCartItems } = useContext(ShopProviderContext);

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {products.map((product) => {
        return <ItemCards product={product} key={product.id} />;
      })}
    </div>
  );
}
