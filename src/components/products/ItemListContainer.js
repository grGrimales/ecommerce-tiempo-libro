import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { ItemList } from "./ItemList";
import { getProducts } from "../services/firebase/firestore";
import { Wait } from "../ui/Wait";

export const ItemListContainer = ({ greetings }) => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useAsync(
    setLoading,
    () => getProducts(categoryId),
    setProducts,
    () => console.log("Hubo un error en item List container"),
    [categoryId]
  );

  if (loading) return <Wait />;

  return (
    <>
      <div className="listContainer">
        <h1 className="textCenter">{greetings}</h1>

        {products.length === 0 ? (
          <h2>No hay productos</h2>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
};
