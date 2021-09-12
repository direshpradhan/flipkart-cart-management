import React from "react";
import { useData } from "../../context/DataContext";
import { CartCard } from "./components/cartCard/CartCard";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cart } = useData();

  return (
    <>
      <div className={`${styles.card_container}`}>
        {cart.map((cartItem) => {
          return <CartCard cartItem={cartItem} />;
        })}
      </div>
    </>
  );
};
