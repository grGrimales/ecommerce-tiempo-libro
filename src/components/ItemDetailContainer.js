import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../products/products";
import { ItemDetail } from "./ItemDetail";
import { Wait } from "./ui/Wait";

export const ItemDetailContainer = () => {
  const [productId, setProducId] = useState();

  const { id } = useParams();
  useEffect(() => {
    getProductsById(id)
      .then((product) => {
        setProducId(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {productId ? (
        <div className="cardDetail">
          <ItemDetail productId={productId} />
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};
