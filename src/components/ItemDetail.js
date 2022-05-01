import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import CartContext from "../context/CartContext";

export const ItemDetail = ({ productId }) => {
  const { name, img, description, price, category, id, stock } = productId;
  const [addedProduct, setAddedProduct] = useState(false);

  const { addItem, cart, isInCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setAddedProduct(true);
    const productObj = {
      id,
      img,
      name,
      price,
      stock,
      quantity,
    };
    addItem(productObj);
    isInCart(id, quantity);
  };

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
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      )}
    </>
  );
};
