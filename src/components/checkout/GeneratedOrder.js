import React from "react";

export const GeneratedOrder = () => {
  const idOrder = localStorage.getItem("idOrder");

  return (
    <div className="generatedOrder">
      <h1 className="generatedOrder__title">Datos de la compra</h1>
      <h3 className="generatedOrder__subtitle">
        ¡Se generó su pedido con ÉXITO!
      </h3>
      <p className="generatedOrder__description">
        *Su número de orden de compra es el siguiente: <span>{idOrder}</span>
      </p>
      <p className="generatedOrder__description">¡Gracias por su compra!</p>
    </div>
  );
};
