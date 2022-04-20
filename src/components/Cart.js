import { useContext, useState } from "react";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

export const Cart = () => {
  const { cart, removeItem, total, clear } = useContext(CartContext);

  return (
    <>
      <main className="containerCart">
        <h2>Artículos</h2>
        <div className="animate__animated animate__fadeIn cart">
          {cart.length === 0 ? (
            <div className="cart__empty">
              <p>No hay productos en el carrito</p>

              <Link className="cart__link" to="/">
                <i className="fas fa-arrow-alt-left"></i>Volver a Inicio
              </Link>
            </div>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="cart__products">
                <div>
                  <img
                    className="cart__img"
                    src={product.img}
                    alt={product.name}
                  />
                </div>

                <div>
                  <p className="cart__name">{product.name}</p>

                  <div className="cart__quantity">
                    <p>Cantidad: {product.quantity}</p>
                  </div>
                  <p className="cart__price">
                    S/ <span>{product.price}</span>
                  </p>
                  <p className="cart__subtotal">
                    Subtotal: S/
                    <span>{product.price * parseInt(product.quantity)}</span>
                  </p>
                </div>
                <button
                  className="cart__btnDelete"
                  type="button"
                  onClick={() => removeItem(product.id)}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
        {total > 0 ? (
          <div className="resume">
            <div className="resume__description">
              <h3>Resúmen del Pedido</h3>

              <>
                <p className="cart__subtotal">
                  Total a pagar S/
                  <span>{total}</span>
                </p>
              </>
            </div>
            <div className="resume__containerBtn">
              <button className="resume__btn" type="submit" onClick={clear}>
                Vaciar carrito
              </button>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
};
