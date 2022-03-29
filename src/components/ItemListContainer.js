import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = ({ greetings }) => {
  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos al carrito`);
  };

  return (
    <div>
      <h1 className="textCenter">{greetings}</h1>

      <ItemCount initial={1} stock={15} onAdd={handleOnAdd} />
      <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />

      <ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
    </div>
  );
};
