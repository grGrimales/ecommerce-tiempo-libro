import React,  { useState, useEffect } from "react";
import { getProducts } from "../products/products";
import {useParams} from 'react-router-dom';

import { ItemList } from "./ItemList";
import { Wait } from "./ui/Wait";

export const ItemListContainer = ({ greetings }) => {
 

  const {categoryId} = useParams();

  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts(categoryId)
      .then((product) => {
        setProducts(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
<>
{products ?   <div className="listContainer">
      <h1 className="textCenter">{greetings}</h1>

      <ItemList products={products} />
    </div> : <Wait/>}
</>   
  );
};
