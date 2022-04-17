import { useContext } from "react";
import CartContext from "../context/CartContext";

export const Cart = () => {
  const { cart, removeItem, total, clear } = useContext(CartContext);

  console.log(cart);

  return (
    <>
      <main className="containerCart">
        <h2>Carrito</h2>
        <div className="animate__animated animate__fadeIn cart">
          {cart.length === 0
            ? "Carrito vacío"
            : cart.map((product) => (
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
              ))}
        </div>
        <div className="resume">
          <div className="resume__description">
            <h3>Resúmen del Pedido</h3>
            {total > 0 ? (
              <>
                <p className="cart__subtotal">
                  Total a pagar S/
                  <span>5555555</span>
                </p>
              </>
            ) : (
              <p>No hay productos en el carrito</p>
            )}
          </div>
          <div className="resume__containerBtn">
            <button className="resume__btn" type="submit" onClick={clear}>
              Vaciar carrito
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
