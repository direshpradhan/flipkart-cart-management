import React from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  return (
    <>
      <div className={`${styles.main}`}>
        <img src={product.imgURL} alt="Product" className={`${styles.img}`} />
        <div className={`${styles.details}`}>
          <p className={`${styles.brand}`}>{product.brand}</p>
          <p className={`${styles.name}`}>{product.name}</p>
          <p className={`${styles.discounted_price}`}>
            &#8377;{product.discountedPrice}
          </p>
          <p className={`${styles.price}`}>&#8377;{product.price}</p>
          <p className={`${styles.discount}`}>{product.discount} %</p>
        </div>
        <button className={`${styles.button}`}>Add to Cart</button>
      </div>
    </>
  );
};
