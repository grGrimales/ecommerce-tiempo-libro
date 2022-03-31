import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../products/products";
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greetings }) => {
  // const handleOnAdd = (quantity) => {
  //   console.log(`se agregaron ${quantity} productos al carrito`);
  // };

  const [products, setProducts] = useState([]);
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
    <div>
      <h1 className="textCenter">{greetings}</h1>

      <ItemList products={products} />
      {/* <ItemCount initial={1} stock={15} onAdd={handleOnAdd} /> */}
    </div>
  );
};
