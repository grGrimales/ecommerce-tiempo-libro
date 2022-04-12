import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ productId }) => {
  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos al carrito`);
  };

  const { name, img, description, price, category } = productId;
  return (
    <>
      <div className="cardDetail__container">
        <div className="containerImg">
          <img className="containerImg__img" src={img} alt={name} />
        </div>

        <div className="cardDetail__contents">
          <h2 className="cardDetail__title ">{name}</h2>

          <p className="cardDetail__description">
            <span>Descripción:</span> {description}
          </p>
          <p className="cardDetail__category">
            <span> Category:</span> {category}
          </p>
          <p className="cardDetail__price">
            Precio: <span>{price}</span>
          </p>
        </div>
      </div>

      <ItemCount initial={1} stock={15} onAdd={handleOnAdd} />
    </>
  );
};
