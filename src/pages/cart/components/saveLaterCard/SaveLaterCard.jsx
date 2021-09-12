import React from "react";
import { useData } from "../../../../context/DataContext";
import styles from "../cartCard/CartCard.module.css";

export const SaveLaterCard = ({ saveItem }) => {
  const { dispatch } = useData();

  return (
    <div className={`${styles.card}`}>
      <div>
        <img
          src={saveItem.imgURL}
          alt="Cart Product"
          className={`${styles.img}`}
        />
        <div className={`${styles.quantity}`}>
          <button disabled className={`${styles.quantity_btn}`}>
            -
          </button>
          <span>{saveItem.quantity}</span>
          <button className={`${styles.quantity_btn}`} disabled>
            +
          </button>
        </div>
      </div>
      <div className={`${styles.details}`}>
        <p className={`${styles.brand}`}>{saveItem.brand}</p>
        <p className={`${styles.name}`}>{saveItem.name}</p>
        <div className={`${styles.pricing}`}>
          <p className={`${styles.discounted_price}`}>
            &#8377;{saveItem.discountedPrice}
          </p>
          <p className={`${styles.price}`}>&#8377;{saveItem.price}</p>
          <p className={`${styles.discount}`}>{saveItem.discount} %</p>
        </div>

        <button
          className={`${styles.btn}`}
          onClick={() => {
            dispatch({ type: "MOVE_TO_CART", payload: saveItem });
            dispatch({ type: "REMOVE_FROM_SAVE_LATER", payload: saveItem.id });
          }}
        >
          Move to Cart
        </button>

        <button
          className={`${styles.btn}`}
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_SAVE_LATER", payload: saveItem.id })
          }
        >
          Remove from Save Later
        </button>
      </div>
    </div>
  );
};
