import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ItemList } from "./ItemList";
import { Wait } from "./ui/Wait";
import { firestoreDb } from "./services/firebase";

export const ItemListContainer = ({ greetings }) => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState();

  useEffect(() => {
    const productsRef = collection(firestoreDb, "products");
    const collectionRef = categoryId
      ? query(productsRef, where("category", "array-contains", categoryId))
      : productsRef;

    getDocs(collectionRef).then((response) => {
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    });
  }, [categoryId]);

  return (
    <>
      {products ? (
        <div className="listContainer">
          <h1 className="textCenter">{greetings}</h1>

          <ItemList products={products} />
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};
