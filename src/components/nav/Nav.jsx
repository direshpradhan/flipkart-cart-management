import React from "react";
import styles from "./Nav.module.css";

export const Nav = ({ setRoute }) => {
  return (
    <div className={`${styles.navigation}`}>
      <h2>Flipkart Clone</h2>
      <div className={`${styles.link}`}>
        <p onClick={() => setRoute("home")}>Home</p>
        <p onClick={() => setRoute("cart")}>Cart</p>
      </div>
    </div>
  );
};
