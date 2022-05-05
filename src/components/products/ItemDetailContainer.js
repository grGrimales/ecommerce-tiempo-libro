import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Wait } from "../ui/Wait";
import { getProductById } from "../services/firebase/firestore";

export const ItemDetailContainer = () => {
  const [productId, setProducId] = useState();

  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((result) => {
      setProducId(result);
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
