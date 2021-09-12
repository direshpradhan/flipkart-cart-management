// import data from "../../data/data.json";
import { useData } from "../../context/DataContext";
import { ProductCard } from "./components/productCard/ProductCard";
import styles from "./ProductListing.module.css";

export const cartProducts = [];

export const ProductListing = () => {
  const { products } = useData();
  return (
    <>
      <div className={`${styles.card_container}`}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};
