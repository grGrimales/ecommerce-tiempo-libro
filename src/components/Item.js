import React from "react";
import { Link } from 'react-router-dom';


export const Item = ({ name, img, id, price }) => {
  return (
    <div className="card">
      <img className="card__img" src={img} alt={name} />

      <h2 className="card__title">{name}</h2>
      <p className="card__price">
        Precio: <span>{price}</span>
      </p>
     
      <Link to={`/item/${id}`} >
      <button className="card__btn">
        Ver detalles
      </button>

      </Link>
    </div>
  );
};
