import React from "react";
import { useData } from "../../context/DataContext";

export const Cart = () => {
  const { cart, dispatch } = useData();

  return (
    <>
      <div>
        {cart.map((cartItem) => {
          return (
            <div>
              <img src={cartItem.imgURL} alt="Cart Product" />
              <div>
                <p>{cartItem.brand}</p>
                <p>{cartItem.name}</p>
                <div>
                  <p>&#8377;{cartItem.discountedPrice}</p>
                  <p>&#8377;{cartItem.price}</p>
                  <p>{cartItem.discount} %</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
