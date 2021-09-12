import React from "react";
import { useData } from "../../../../context/DataContext";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  const { dispatch, cart } = useData();
  const isInCart = cart.find((cartItem) => cartItem.id === product.id);

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
        {isInCart ? (
          <button className={`${styles.button}`}>Go to Cart</button>
        ) : (
          <button
            className={`${styles.button}`}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};
