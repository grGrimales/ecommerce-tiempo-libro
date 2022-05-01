import React, { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import { Wait } from "./ui/Wait";

import { useForm } from "../hooks/useForm";

import {
  getDocs,
  writeBatch,
  query,
  where,
  collection,
  documentId,
  addDoc,
} from "firebase/firestore";
import { firestoreDb } from "./services/firebase/index";
import { GeneratedOrder } from "./GeneratedOrder";

export const OrdenService = () => {
  const { clear } = useContext(CartContext);

  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [showOrder, setShowOrder] = useState(false);

  const removeError = () => {
    setError(false);
    setMessage(null);
  };
  const [loading, setLoading] = useState(false);
  const [formLoginValues, handleContactInputChange, reset] = useForm({
    nameInput: "",
    phone: "",
    email: "",
    address: "",
  });

  const { nameInput, phone, email, address } = formLoginValues;
  const cart = JSON.parse(localStorage.getItem("cart"));
  const total = localStorage.getItem("total");

  const createOrder = () => {
    setLoading(true);
    const objOrder = {
      items: cart,
      buyer: {
        nameInput,
        phone,
        email,
        address,
      },
      total,
      date: new Date(),
    };

    const ids = cart.map((prod) => prod.id);

    const batch = writeBatch(firestoreDb);

    const collectionRef = collection(firestoreDb, "products");

    const outOfStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find(
            (prod) => prod.id === doc.id
          )?.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestoreDb, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({
            name: "outOfStockError",
            products: outOfStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();

        JSON.stringify(localStorage.setItem("idOrder", id));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setShowOrder(true);
        clear();
      });
  };

  if (loading) {
    return (
      <h2>
        Se esta generando su orden <Wait />{" "}
      </h2>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim().length === 0 ||
      nameInput.trim().length === 0 ||
      phone.trim().length === 0 ||
      address.trim().length === 0
    ) {
      setError(true);
      setMessage("*Todos los campos son obligatorios");
      setTimeout(() => {
        removeError();
      }, 3000);
    } else {
      createOrder();
      setTimeout(() => {
        reset();
      }, 800);
    }
  };

  return (
    <>
      {!showOrder ? (
        <div className="containerOrden">
          <div className="containerForm">
            <form>
              <h2 className="containerForm__title">Datos personales</h2>
              <div className="formGroup">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="nameInput"
                  id="name"
                  value={nameInput}
                  required
                  placeholder="Ingrese su nombre"
                  onChange={handleContactInputChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email">Correo</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  placeholder="ej: example@tiempolibro.com"
                  onChange={handleContactInputChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="phone">Telefóno</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  value={phone}
                  placeholder="Ingrese número de contacto"
                  onChange={handleContactInputChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  value={address}
                  placeholder="Ingrese su dirección"
                  onChange={handleContactInputChange}
                />
              </div>

              <button
                type="submit"
                className="containerForm__btn"
                onClick={handleSubmit}
              >
                Finalizar Compra
              </button>
              {error && (
                <div className="alertError animate__animated animate__fadeIn">
                  {message}
                </div>
              )}
            </form>
          </div>
          <div className="containerCheckout">
            <h3 className="containerCheckout__title">Resúmen de la compra</h3>

            <table className="table-conf">
              <thead>
                <tr>
                  <th>PRODUCTO</th>

                  <th>PRECIO</th>

                  <th>CANTIDAD</th>

                  <th>SUBTOTAL</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * parseInt(product.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="containerCheckout__title">Total: {total}</h3>
          </div>
        </div>
      ) : (
        <GeneratedOrder />
      )}
    </>
  );
};
