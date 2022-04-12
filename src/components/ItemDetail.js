import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ productId }) => {
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [addedProduct, setAddedProduct] = useState(false);

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos al carrito`);
    setQuantityProduct(quantity);
    setAddedProduct(true);
  };

  console.log(quantityProduct);

  const { name, img, description, price, category } = productId;
  return (
    <>
      <div className="cardDetail__container animate__animated animate__fadeIn">
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

      {addedProduct ? (
        <NavLink
          to="/cart"
          className="linkCart  animate__animated animate__fadeIn"
        >
          {" "}
          Finalizar Compra
        </NavLink>
      ) : (
        <ItemCount initial={1} stock={15} onAdd={handleOnAdd} />
      )}
    </>
  );
};
