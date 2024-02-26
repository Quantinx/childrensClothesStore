import { useContext } from "react";
import ItemCards from "../components/ItemCards";
import { ShopProviderContext } from "../providers/ShopProvider";

export default function Shop() {
  const { products } = useContext(ShopProviderContext);

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {products.map((product) => {
        return <ItemCards product={product} key={product.id} />;
      })}
    </div>
  );
}
