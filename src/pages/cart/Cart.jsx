import React from "react";
import { useData } from "../../context/DataContext";
import { CartCard } from "./components/cartCard/CartCard";
import styles from "./Cart.module.css";
import { SaveLaterCard } from "./components/saveLaterCard/SaveLaterCard";

export const Cart = () => {
  const { cart, saveLater } = useData();

  const totalPrice = (arr) => {
    return arr.reduce(
      (total, { quantity, price }) => total + quantity * price,
      0
    );
  };

  const totalDiscountedPrice = (arr) => {
    return arr.reduce(
      (total, { quantity, discountedPrice }) =>
        total + quantity * discountedPrice,
      0
    );
  };

  return (
    <>
      <div className={`${styles.cart}`}>
        <div className={`${styles.card_container}`}>
          <h2>My Cart</h2>
          {cart.length > 0 ? (
            cart.map((cartItem) => {
              return <CartCard cartItem={cartItem} />;
            })
          ) : (
            <p>No items in cart</p>
          )}
        </div>
        {cart.length > 0 && (
          <div className={`${styles.pricing}`}>
            <h2>Price:</h2>
            <h4>Total Items: {cart.length}</h4>
            <div className={`${styles.prices}`}>
              <div>
                <p>Price:</p>
                <p>Discount:</p>
                <p>Total Price:</p>
              </div>
              <div>
                <p>{totalPrice(cart)}</p>
                <p>{totalPrice(cart) - totalDiscountedPrice(cart)}</p>
                <p>{totalDiscountedPrice(cart)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`${styles.saveLater}`}>
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
