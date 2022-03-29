import React, { useState } from "react";
import Swal from "sweetalert2";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState((initial = 1));

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Solo contamos con ${stock} unidades disponibles`,
      });
    }
  };

  return (
    <div className="containerAdd">
      <p className="containerAdd__p">{count}</p>
      <div className="containerAdd__btn">
        <button
          type="submit"
          className="containerAdd__btnDecrement"
          onClick={decrement}
        >
          -
        </button>

        <button
          type="submit"
          className="containerAdd__btnAdd"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>

        <button
          type="submit"
          className="containerAdd__btnIncrement"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};
