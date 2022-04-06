import React,  { useState, useEffect } from "react";
import { getProducts } from "../products/products";
import { ItemList } from "./ItemList";
import { Wait } from "./ui/Wait";

export const ItemListContainer = ({ greetings }) => {
 
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts()
      .then((product) => {
        setProducts(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
<>
{products ?   <div>
      <h1 className="textCenter">{greetings}</h1>

      <ItemList products={products} />
    </div> : <Wait/>}
</>   
  );
};
