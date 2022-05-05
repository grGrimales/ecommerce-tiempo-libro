import React from "react";

import { useContext } from "react";
import CartContext from "../../context/CartContext";

export const CartWidget = () => {
  const { count } = useContext(CartContext);
  return (
    <>
      {count > 0 ? (
        <span>
          <i className="fas fa-shopping-cart"></i>
          {count}
        </span>
      ) : (
        <span>
          <i className="fas fa-shopping-cart"></i>
        </span>
      )}
    </>
  );
};
