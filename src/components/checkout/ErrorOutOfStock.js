import React from "react";
import { Link } from "react-router-dom";

export const ErrorOutOfStock = ({ products }) => {
  return (
    <>
      <h2 className="titleOrder">
        No pudimos Generar su orden. No contamos con stock para:{" "}
      </h2>
      {products.map((product) => (
        <p className="nameProduct" key={product.id}>
          *{product.name}
        </p>
      ))}
      <Link className="cart__link linkOutOfStock" to="/">
        <i className="fas fa-arrow-alt-left"></i>Volver a Inicio
      </Link>
    </>
  );
};
