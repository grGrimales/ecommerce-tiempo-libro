import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreDb } from "./services/firebase";
import { getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";
import { Wait } from "./ui/Wait";

export const ItemDetailContainer = () => {
  const [productId, setProducId] = useState();

  const { id } = useParams();
  useEffect(() => {
    getDoc(doc(firestoreDb, "products", id)).then((response) => {
      const product = { id: response.id, ...response.data() };

      setProducId(product);
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
