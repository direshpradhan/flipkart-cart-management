import React from "react";
import { useData } from "../../context/DataContext";
import { CartCard } from "./components/cartCard/CartCard";
import styles from "./Cart.module.css";
import { SaveLaterCard } from "./components/saveLaterCard/SaveLaterCard";

export const Cart = () => {
  const { cart, saveLater } = useData();

  return (
    <>
      <div>
        <div className={`${styles.card_container}`}>
          <h2>My Cart</h2>
          {cart.map((cartItem) => {
            return <CartCard cartItem={cartItem} />;
          })}
        </div>
        <div> </div>
      </div>
      <div>
        <div className={`${styles.card_container}`}>
          <h2>Save For Later</h2>
          {saveLater.map((saveItem) => {
            return <SaveLaterCard saveItem={saveItem} />;
          })}
        </div>
      </div>
    </>
  );
};
