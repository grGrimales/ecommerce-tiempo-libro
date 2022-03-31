import React from "react";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="products">
      {" "}
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}{" "}
    </div>
  );
};
