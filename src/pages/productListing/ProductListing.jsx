import data from "../../data/data.json";
import { ProductCard } from "./components/productCard/ProductCard";
import styles from "./ProductListing.module.css";

export const ProductListing = () => {
  return (
    <>
      <div className={`${styles.card_container}`}>
        {data.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};
