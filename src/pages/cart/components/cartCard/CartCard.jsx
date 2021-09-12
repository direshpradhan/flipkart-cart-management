import React from "react";
import { useData } from "../../../../context/DataContext";
import styles from "./CartCard.module.css";

export const CartCard = ({ cartItem }) => {
  const { dispatch } = useData();

  return (
    <div className={`${styles.card}`}>
      <div>
        <img
          src={cartItem.imgURL}
          alt="Cart Product"
          className={`${styles.img}`}
        />
        <div className={`${styles.quantity}`}>
          <button
            className={`${styles.quantity_btn}`}
            onClick={() =>
              cartItem.quantity > 1 &&
              dispatch({ type: "DECREMENT_QUANTITY", payload: cartItem.id })
            }
          >
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button
            className={`${styles.quantity_btn}`}
            onClick={() =>
              dispatch({ type: "INCREMENT_QUANTITY", payload: cartItem.id })
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={`${styles.details}`}>
        <p className={`${styles.brand}`}>{cartItem.brand}</p>
        <p className={`${styles.name}`}>{cartItem.name}</p>
        <div className={`${styles.pricing}`}>
          <p className={`${styles.discounted_price}`}>
            &#8377;{cartItem.discountedPrice}
          </p>
          <p className={`${styles.price}`}>&#8377;{cartItem.price}</p>
          <p className={`${styles.discount}`}>{cartItem.discount} %</p>
        </div>

        <button
          className={`${styles.btn}`}
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: cartItem.id });
            dispatch({ type: "ADD_TO_SAVE_LATER", payload: cartItem });
          }}
        >
          Save for Later
        </button>

        <button
          className={`${styles.btn}`}
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: cartItem.id })
          }
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
