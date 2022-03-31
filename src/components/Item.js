import React from "react";

export const Item = ({ name, img, description, price }) => {
  return (
    <div className="card">
      <img className="card__img" src={img} alt={name} />

      <h2 className="card__title">{name}</h2>
      <p className="card__price">
        Precio: <span>{price}</span>
      </p>
      <button className="card__btn">Ver Detalles</button>
    </div>
  );
};
